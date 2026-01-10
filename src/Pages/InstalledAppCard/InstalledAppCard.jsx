import React from 'react';import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { removeInstalledApp } from '../../Utility/appsInstalled';
import { toast } from 'react-toastify';


const InstalledAppCard = ({app, setInstalledList}) => {
    const handleUninstallApps = (id) =>{
        removeInstalledApp(id);
        toast.info("App Uninstalled!");
        setInstalledList((installedApps)=>
            installedApps.filter((app)=> app.id !== id)
            
        );
    }

    return (
        <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center gap-4'>
                <img  className='w-20 h-20' src={app.image} alt="" />
                <div>
                    <h1>{app.title}</h1>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-1'><img className='w-3 h-3' src={download} alt="" /><span className='text-[#00D390]'>{app.downloads}</span></div>
                        <div className='flex items-center gap-1'><img className='w-3 h-3' src={rating} alt="" /><span className='text-[#FF8811]'>{app.ratingAvg}</span></div>
                        <div className='text-[#627382]'>{app.size} MB</div>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleUninstallApps(app.id)} className='btn bg-[#00D390] text-white'>Uninstall</button>
            
        </div>
        
    );
};

export default InstalledAppCard;