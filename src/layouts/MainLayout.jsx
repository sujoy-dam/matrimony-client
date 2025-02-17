import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const MainLayout = () => {
  return (
    <div className='bg-white relative'>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      <div className='pt-5 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
