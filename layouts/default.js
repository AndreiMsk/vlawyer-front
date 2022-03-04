import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import LiveChat from "components/global/LiveChat";
import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Socketio from "socket.io-client";

const Layout = ({ children }) => {

  /* set intial state for drawer - closed  */
  const [drawer, setDrawer] = useState(false);

  const [echo, setEcho] = useState(null);

  /* method sent as props to sibling to toggle drawer on/off */
  const toggleDrawer = () => setDrawer(!drawer);

  /* create new ECHO instance once the layout is mounted */
  useEffect(() => {

    /* new Echo instance */
    const $echo = new Echo({
      broadcaster: "socket.io",
      host: "ws://your.host:8080",
      client: Socketio,
    });

    /* assigen new instance of echo to local state */
    setEcho($echo);

  }, []);

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
