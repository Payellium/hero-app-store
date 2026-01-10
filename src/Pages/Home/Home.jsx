import React from 'react';
import Banner from '../../Components/Banner/Banner';
import StateSection from '../../Components/StateSection/StateSection';
import { Navigate, useLoaderData, useNavigate } from 'react-router';
import Apps from '../Apps/Apps';
 

const Home = () => {

    const data = useLoaderData();
     const navigate = useNavigate();
    

    return (
        <div>
            <Banner></Banner>
            <StateSection></StateSection>
            <Apps data={data}></Apps>
            <div className='flex items-center justify-center'>
                <button onClick={()=> navigate("apps")} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-4">Show All</button>
            </div>
            
        </div>
    );
};

export default Home;