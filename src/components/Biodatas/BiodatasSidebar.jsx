import React from 'react';

const BiodatasSidebar = ({ handleAge, setFilterGender, setFilterDivision, setSearchAge, filterGender = "", filterDivision = "", searchAge }) => {
    return (
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 p-5 space-x-4'>
            {/* Filter by age */}
            <div className='overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 w-72'>
                <form className='flex w-full' onSubmit={handleAge}>
                    <input
                        className='w-full p-4 bg-transparent outline-none focus:placeholder-transparent'
                        type='text'
                        name='age'
                        placeholder='Enter Age'
                    // onChange={(e) =ttttttt> setSearchAge(e.target.value)}
                    // value={searchAge}
                    />
                    <button className='px-1 py-4 md:px-4 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </form>
            </div>

            {/* Filter by gender */}
            <div className='w-72 rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <select
                    name='gender'
                    className='border bg-transparent p-4 rounded-lg w-full'
                    onChange={(e) => setFilterGender(e.target.value)}
                // value={filterGender || ""}
                >
                    <option value=''>Filter By Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
            </div>

            {/* Filter by division */}
            <div className='w-72 rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <select
                    name='division'
                    className='border bg-transparent p-4 rounded-lg w-full'
                    onChange={(e) => setFilterDivision(e.target.value)}
                // value={filterDivision}
                >
                    <option value="">Select Division</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagram">Chattagram</option>
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
