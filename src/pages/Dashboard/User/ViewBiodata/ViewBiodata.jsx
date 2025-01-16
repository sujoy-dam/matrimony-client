import React from 'react';
import useUserBio from '../../../../hooks/useUserBio';

const ViewBiodata = () => {
    const [refetch,userBios]=useUserBio()
    return (
        <div>
            {userBios.length}
        </div>
    );
};

export default ViewBiodata;