import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import LiveChat from "components/global/LiveChat";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative z-10">{children}</main>
      <LiveChat className="z-100"/>
      <Footer />
    </>
  );
}
