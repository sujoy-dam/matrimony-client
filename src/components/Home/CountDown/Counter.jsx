import React from 'react';
import CountUp from "react-countup";

const Counter = ({ number, title }) => {
    return (
        <div className="">
            <div className="flex gap-2 items-center">
                <CountUp duration={10} className="counter italic font-medium text-4xl" end={number} /><span className='text-2xl text-yellow-700 font-semibold'>+</span>

            </div>
            <span>{title}</span>
        </div>
    );
};

export default Counter;