import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import LiveChat from "components/global/LiveChat";
import { useContext, useEffect, useState } from "react";
import Echo from "laravel-echo";
import { StoreContext, ACTION_TYPES } from "pages/_app";
var client = require("pusher-js");

const Layout = ({ children }) => {
  /* set intial state for drawer - closed  */
  const [drawer, setDrawer] = useState(false);

  /* method sent as props to sibling to toggle drawer on/off */
  const toggleDrawer = () => setDrawer(!drawer);

  const {
    dispatch,
    state: { channel },
  } = useContext(StoreContext);

  const eventMessage = (data) => {
    dispatch({
      type: ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG,
      payload: data,
    });
  };

  useEffect(() => {
    if (channel && channel !== "") {
      /* 1. create new ECHO instance once the layout is mounted */
      const echo = new Echo({
        broadcaster: "pusher",
        key: "356cc28c7b5cd8012ac2",
        cluster: "eu",
        encrypted: true,
        authEndpoint: "localhost:8000/api/broadcasting/auth",
      });

      echo.channel(`${channel}`).listenToAll((event, data) => {
        eventMessage(data.message.message);
      });
      
    }
  }, [channel]);

  /* render default layout */
  return (
    <>
      <Navbar handleDrawer={toggleDrawer} />
      <main className="min-h-screen relative z-20 bg-white">{children}</main>
      <LiveChat className="z-100" drawer={drawer} handleDrawer={toggleDrawer} />
      <Footer />
    </>
  );
};

export default Layout;
