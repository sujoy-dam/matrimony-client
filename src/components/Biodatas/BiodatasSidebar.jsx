import React from 'react';

const BiodatasSidebar = ({setFilterGender,setFilterDivision,setSearchAge}) => {
    return (
        <div className='bg-gray-200 p-5'>
            {/* filter by age */}
            <div className='flex w-full p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 w-full py-4 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Age'
                // aria-label='Enter Job Title'
                onBlur={(e)=>setSearchAge(e.target.value)}
                // value={search}
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
            {/* filter by gender */}
            <div>
                <select
                    name='category'
                    id='category'
                    className='border p-4 rounded-lg w-full'
                  onChange={(e)=>setFilterGender(e.target.value)}
                //   value={filter}
                >
                    <option value=''>Filter By Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    {/* <option value='Digital Marketing'>Digital Marketing</option> */}
                </select>
            </div>
            {/* filter by division */}
            <div>
                <select
                    name='category'
                    id='category'
                    className='border p-4 rounded-lg w-full'
                  onChange={(e)=>setFilterDivision(e.target.value)}
                //   value={filter}
                >
                   <option value="">Select Division</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagra">Chattagra</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Sylhet">Sylhet</option>
                </select>
            </div>
        </div>
    );
};

export default BiodatasSidebar;