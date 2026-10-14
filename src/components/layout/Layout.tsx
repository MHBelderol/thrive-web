import { Outlet } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import BackToTop from './BackToTop'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
