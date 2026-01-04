import React from 'react';
import errorpage from "../../assets/error-404.png";
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <div>
                <img src={errorpage} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center my-5'>
                <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
                <p className='my-2 text-[#627382]'>The page you are looking for is not available.</p>
                <Link to="/"><button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-4">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;