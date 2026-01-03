import React from 'react';

const StateSection = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-10'>
            <h1 className='text-4xl font-bold text-center my-5'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-around mb-5'>
                <div className='text-center'>
                    <h3>Total Downloads</h3>
                    <h2 className='text-6xl font-bold my-3'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <h3>Total Reviews</h3>
                    <h2 className='text-6xl font-bold my-3'>906K</h2>
                    <p>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <h3>Active Apps</h3>
                    <h2 className='text-6xl font-bold my-3'>132+</h2>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default StateSection;