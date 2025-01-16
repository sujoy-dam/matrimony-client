import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const isAdmin=false;
    // const isAdmin=true;
    return (
        <div className='w-1/5 min-h-screen bg-orange-300'>
            <ul className='menu space-y-2 text-xl'>
                {
                    isAdmin ? <>
                        <li><NavLink to='/dashboard/admin_dashboard'>Admin Dashboard</NavLink>
                        </li>
                        <li><NavLink to='/dashboard/manage_users'>Manage Users</NavLink>
                        </li>
                        <li><NavLink to='/dashboard/approved_premium'>Approved Premium</NavLink>
                        </li>
                        <li><NavLink to='/dashboard/contact_request'>Approved Contact Request</NavLink>
                        </li>
                        <li className='uppercase'><NavLink><button onClick={()=>logOut()}>Logout</button></NavLink></li>
                    </> : <>
                        <li className='uppercase'><NavLink to='/dashboard/edit'>Edit Biodata</NavLink></li>
                        <li className='uppercase'><NavLink to='/dashboard/view'>View Biodata</NavLink></li>
                        <li className='uppercase'><NavLink to='/dashboard/my_contact_request'>My Contact Request</NavLink></li>
                        <li className='uppercase'><NavLink to='/dashboard/favourite'>Favourites Biodata</NavLink></li>
                        {/* <li className='uppercase'><NavLink><button onClick={()=>logOut()}>Logout</button></NavLink></li> */}
                        {/* <li className='uppercase'><NavLink><FaList />my booking</NavLink></li> */}
                    </>
                }

                {/* divider */}
                <div className="divider">OR</div>
                <li className='uppercase'><NavLink to='/'>Home</NavLink></li>
                <li className='uppercase'><NavLink to='/order/salad'>Menu</NavLink></li>
                <li className='uppercase'><NavLink to='/order/contact'>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;