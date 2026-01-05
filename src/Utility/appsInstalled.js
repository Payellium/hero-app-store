const getInstalledApps = () =>{
    const installedAppsData = localStorage.getItem("installed");
    
    if(installedAppsData){
        const installedApps = JSON.parse(installedAppsData);
        return installedApps;
    }
    else{
        return [];
    }
}

const addToInstalledApps = (id)=>{
    const installedApps = getInstalledApps();

    if(installedApps.includes(id)){
        alert("This App is already Installed!!!!");
    }
    else{
        installedApps.push(id);
        const data = JSON.stringify(installedApps);
        localStorage.setItem("installed", data);
    }
}
export {addToInstalledApps, getInstalledApps}