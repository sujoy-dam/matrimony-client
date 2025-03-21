import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useAuth from '../../hooks/useAuth';
import { GiTireIronCross } from "react-icons/gi";
import useRole from '../../hooks/useRole';

const ProfileModal = ({isOpen,setIsOpen}) => {
    const {user}=useAuth()
    const [role]=useRole()
    return (
        
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed bg-black inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">
                <img src={user?.photoURL} alt="" />
            </DialogTitle>
            <p className='text-xl'>Email:{user?.email}</p>
            <p className='text-xl'>Name : {user?.displayName}</p>
            <p className='text-xl'>Profile Creation Date:{user?.metadata.creationTime}</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}><GiTireIronCross /></button>
              {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    );
};

export default ProfileModal;