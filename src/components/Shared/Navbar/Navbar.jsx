import { NavLink } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import './Navbar.css'

const Navbar = () => {
  const { user, logOut} = useAuth()


  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px] flex justify-between items-center container mx-auto'>
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-violet-800">B</span>
            <span className="text-blue-700">A</span>
            <span className="text-sky-600">N</span>
            <span className="text-green-600">G</span>
            <span className="text-yellow-600">L</span>
            <span className="text-orange-500">-</span>
            <span className="text-red-600">A</span>
            <span className="text-violet-800">M</span>
            <span className="text-blue-700">A</span>
            <span className="text-sky-600">T</span>
            <span className="text-green-600">R</span>
            <span className="text-yellow-600">I</span>
            <span className="text-orange-500">M</span>
            <span className="text-red-600">N</span>
            <span className="text-violet-800">Y</span>
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/biodatas'>Biodatas</NavLink></li>
            <li><NavLink to='/about_us'>About Us</NavLink></li>
            <li><NavLink to='/contact_us'>Contact Us</NavLink></li>
            {/* <li><NavLink to='/dashboard'>Dashboard</NavLink></li> */}
            {
              user ? <>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                <button onClick={()=>logOut()} className="btn btn-outline">Logout</button>
              </> : <>
                <li><NavLink to='/login'>
                  <button className="btn btn-outline">Login</button>
                </NavLink></li>
              </>
            }

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
