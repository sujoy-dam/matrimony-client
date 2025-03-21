import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import Navbar from '../components/Shared/Navbar/Navbar'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import Footer from '../components/Shared/Footer/Footer';
// import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  return (
    <div className='relative'>
      {/* <div className='sticky top-0 z-50'>
        <Navbar />
      </div> */}
      <div className='flex mb-5 min-h-screen'>
        {/* Left Side: Sidebar Component */}
        <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}></Sidebar>
        {/* Right Side: Dashboard Dynamic Content */}
        <button className={`btn ${toggleSidebar===false && "hidden"}`} onClick={()=>setToggleSidebar(false)}>
          <CiMenuBurger />
        </button>
        <div className='flex-1'>
          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
      {/* <div>
        <Footer/>
      </div> */}
    </div>
  )
}

export default DashboardLayout
