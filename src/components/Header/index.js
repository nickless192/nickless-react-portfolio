import React from "react";
import Navigation from "../Navigation";

function Header ({currentProject, setCurrentProject, projects, sectionSelected, setSectionSelected}) {

    return(
        <header className="flex items-end justify-between mb-5 ">
            <h1 className="text-2xl font-bold hover:text-blue-800 text-blue-600 w-1/3 cursor-default">Nickless React Portfolio</h1>
            <Navigation 
                className="w-full"
            projects= {projects}
            currentProject= {currentProject}
            setCurrentProject= {setCurrentProject} 
            sectionSelected= {sectionSelected}
            setSectionSelected = {setSectionSelected}
            />            
        </header>
    )
}

export default Header;