import React from 'react';
import appError from "../../assets/App-Error.png"

const AppError = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-3'>
            <div>
                <img src={appError} alt="" />
            </div>
            <div className='text-center my-5'>
                <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] my-3'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/"><button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-4">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default AppError;