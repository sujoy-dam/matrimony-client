import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Modal = ({ isOpen, setIsOpen }) => {
    // let [isOpen, setIsOpen] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const requestHandler = async () => {
       
        try {
            // send a premium request to server
            const { data } = await axiosSecure.patch(`/bio-premium/${user?.email}`)
            
            toast.success('Successfully Appled to Become a Premium User')
        } catch (err) {
            
            toast.error(err.response.data)
        }finally{
            setIsOpen(false)

        }
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 rounded-lg bg-white p-12 border-4">
                        <DialogTitle className="font-bold">If are you sure to make you premium</DialogTitle>
                        {/* <Description>This will permanently deactivate your account</Description>
                        <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p> */}
                        <div className="flex gap-4">
                            {/* <button className='btn btn-secondary' onClick={() => setIsOpen(false)}>Cancel</button> */}
                            <button className='btn btn-secondary' onClick={requestHandler}>Yes</button>
                            <button className='btn btn-success' onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default Modal;