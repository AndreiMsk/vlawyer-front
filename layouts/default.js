import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import LiveChat from "components/global/LiveChat";
import { useState } from "react";

const Layout = ({ children }) => {

  /* set intial state for drawer - closed  */
  const [drawer, setDrawer] = useState(false);

  /* method sent as props to sibling to toggle drawer on/off */
  const toggleDrawer = () => setDrawer(!drawer)
  
  /* render default layout */
  return (
    <>
      <Navbar handleDrawer={toggleDrawer}/>
      <main className="min-h-screen relative z-20">{children}</main>
      <LiveChat className="z-100" drawer={drawer} handleDrawer={toggleDrawer} />
      <Footer />
    </>
  );
}

export default Layout;
