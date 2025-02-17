import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import Navbar from '../components/Shared/Navbar/Navbar'
// import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div className='relative min-h-screen lg:flex bg-white'>
        {/* Left Side: Sidebar Component */}
        <Sidebar></Sidebar>
        {/* Right Side: Dashboard Dynamic Content */}
        <div className='flex-1 '>
          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
