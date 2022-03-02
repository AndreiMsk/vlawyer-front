import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import LiveChat from "components/global/LiveChat";
import { useState, setState } from "react";

export default function Layout({ children }) {

  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => setDrawer(!drawer)
  
  return (
    <>
      <Navbar handleDrawer={handleDrawer}/>
      <main className="min-h-screen relative z-20">{children}</main>
      <LiveChat className="z-100" drawer={drawer} handleDrawer={handleDrawer} />
      <Footer />
    </>
  );
}
