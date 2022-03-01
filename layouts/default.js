import Navbar from 'components/global/Navbar'
import Footer from 'components/global/Footer'
import LiveVideo from 'components/LiveVideo'

export default function Layout({ children }) {
  return (
    <div className='min-h-screen p-16'>
      <Navbar />
      <main>{children}</main>
       {/* <LiveVideo /> */}
      <Footer />
    </div>
  )
}