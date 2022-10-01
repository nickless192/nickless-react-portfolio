import React from "react";
import Navigation from "../Navigation";

function Header ({currentProject, setCurrentProject, projects, sectionSelected, setSectionSelected}) {

    return(
        <header className="flex-row">
            <h1>Nickless React Portfolio</h1>
            <Navigation
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