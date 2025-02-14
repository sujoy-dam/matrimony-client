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
import BiodataDetails from '../pages/BiodataDetails/BiodataDetails'
import ContactRequest from '../pages/Dashboard/User/ContactRequest/ContactRequest'
import Favourite from '../pages/Dashboard/User/Faviourite/Favourite'
import AdminDashboard from '../pages/Dashboard/Admin/AdminDashboard/AdminDashboard'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers'
import ApprovedPremium from '../pages/Dashboard/Admin/ApprovedPremium/ApprovedPremium'
import ApprovedContactRequest from '../pages/Dashboard/Admin/ApprovedContactRequest/ApprovedContactRequest'
import Checkout from '../pages/Checkout/Checkout'
import UserPremiumModal from '../components/Modal/UserPremiumModal'
import BiodatasBody from '../components/Biodatas/BiodatasBody'
import GotMarried from '../pages/Dashboard/User/GotMarried/GotMarried'
// import { element } from 'prop-types'

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
      {
        path:'/biodata-details/:id',
        element:<PrivateRoute>
          <BiodataDetails/>
        </PrivateRoute>,
        // loader:({params})=>console.log(params.id)
        loader:async({params})=>await fetch(`${import.meta.env.VITE_API_URL}/bio/${params.id}`)
      },
      {
        path:'/checkout/:id',
        element:<Checkout/>,
      },
      // {
      //   path:'/become-premium',
      //   element:<UserPremiumModal/>
      // }
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
     },
     {
      path:'my_contact_request',
      element:<ContactRequest />
     },
     {
      path:'favourite',
      element:<Favourite/>
     },
     {
      path:'gotMarried',
      element:<GotMarried/>
     },
    //  admin route here
    {
      path:'admin_dashboard',
      element:<AdminDashboard/>
    },
    {
      path:'manage_users',
      element:<ManageUsers/>
    },
    {
      path:'approved_premium',
      element:<ApprovedPremium/>
    },
    {
      path:'contact_request',
      element:<ApprovedContactRequest/>
    }
    ],
  },
])
