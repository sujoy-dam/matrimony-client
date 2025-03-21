import { Link, NavLink } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import './Navbar.css'
import useRole from "../../../hooks/useRole"
import { useEffect, useState } from "react"

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [role] = useRole()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(theme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const nav = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/biodatas'>Biodatas</NavLink></li>
    <li><NavLink to='/about_us'>About </NavLink></li>
    <li><NavLink to='/contact_us'>Contact</NavLink></li>
    {
      user && role !== "Admin" && <li><NavLink to='/dashboard/edit'>Dashboard</NavLink></li>
    }

    {
      user && role === 'Admin' && <li><NavLink to='/dashboard/admin_dashboard'>Dashboard</NavLink></li>
    }
  </>

  return (
    <div className="bg-base-100 py-2 shadow-xl">
      <div className="navbar container mx-auto dark:bg-gray-100 dark:text-gray-800 sticky top-0 z-50">
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
          <div className="flex items-center">
            <Link to="/" className="btn btn-ghost text-lg lg:text-2xl">Bangla Matrimony</Link>
            <div className="form-control">
              <label className="label cursor-pointer">
                <button onClick={handleToggle}>
                  <input type="checkbox" className="toggle" defaultChecked />
                </button>
              </label>
            </div>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              <button onClick={() => logOut()} className="btn btn-outline font-semibold border rounded mr-2">Logout</button>
              <img className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" src={user.photoURL} alt="" />
            </> : <>
              <NavLink to='/login'>
                <button type="button" className="btn btn-outline font-semibold border rounded mr-2">Login</button>
              </NavLink>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
