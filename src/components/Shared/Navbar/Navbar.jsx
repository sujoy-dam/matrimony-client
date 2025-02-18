import { Link, NavLink } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import './Navbar.css'
import useRole from "../../../hooks/useRole"

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [role]=useRole()
  const nav = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/biodatas'>Biodatas</NavLink></li>
    <li><NavLink to='/about_us'>About Us</NavLink></li>
    <li><NavLink to='/contact_us'>Contact Us</NavLink></li>
    {
      user && role ==='General'|| role ==='Premium' && <li><NavLink to='/dashboard/edit'>Dashboard</NavLink></li>
    }
  
    {
      user && role ==='Admin' && <li><NavLink to='/dashboard/admin_dashboard'>Dashboard</NavLink></li>
    }
  </>

  return (
    <>
      <div className="navbar py-5 bg-gray-800 dark:bg-gray-100 text-gray-300 dark:text-gray-800 border-4 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {nav}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-lg lg:text-2xl">Bangla Matrimony</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
          {/* {
            user && <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
          } */}
          {
            user ? <>


              {/* <button  className="btn btn-outline">Logout</button> */}
              <button onClick={() => logOut()} type="button" className="px-4 py-2 lg:px-8 lg:py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 mr-2">Logout</button>
              <img className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" src={user.photoURL} alt="" />
            </> : <>
              <NavLink to='/login'>
                {/* <button className="btn btn-outline">Login</button> */}
                <button type="button" className="px-4 py-2 lg:px-8 lg:py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 mr-2">Login</button>
              </NavLink>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
