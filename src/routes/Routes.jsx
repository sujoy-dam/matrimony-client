import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import MainLayout from '../layouts/MainLayout'
import Biodatas from '../pages/Biodatas/Biodatas'
import AboutUs from '../pages/AboutUs/AboutUs'
import ContactUs from '../pages/ContactUs/ContactUs'
import EditBiodata from '../pages/Dashboard/User/EditBiodata/EditBiodata'
import ViewBiodata from '../pages/Dashboard/User/ViewBiodata/ViewBiodata'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'biodatas',
        element: <Biodatas/>,
      },
      {
        path: 'about_us',
        element: <AboutUs/>,
      },
      {
        path: 'contact_us',
        element: <ContactUs />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
     {
      path:'edit',
      element:<EditBiodata/>
     },
     {
      path:'view',
      element:<ViewBiodata/>
     }
    ],
  },
])
