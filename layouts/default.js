import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import LiveVideo from "components/LiveVideo";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative z-10">{children}</main>
      {/* <LiveVideo /> */}

      <Footer />
    </>
  );
}
