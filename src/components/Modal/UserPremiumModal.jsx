import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';

const UserPremiumModal = ({ isOpen, setIsOpen, handlePremiumRequest }) => {
    return (
        <div>
            {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-slate-100 p-12 rounded-md">
                        <DialogTitle className="font-bold">Become a Premium User</DialogTitle>
                        <Description>Are you want to become a premium user?</Description>
                        {/* <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p> */}
                        <div className="flex gap-4">
                            <Button onClick={handlePremiumRequest} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Send Request
                            </Button>
                            <Button onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                                Cancel
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default UserPremiumModal;