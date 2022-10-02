import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function Navigation ({currentProject, setCurrentProject, projects, sectionSelected, setSectionSelected}) {
    const [sections] = useState([
        {
            name: 'About Me'
        },
        {
            name: 'My Resume'
        },
        {
            name: 'Contact Me'
        }
    ])
    return (
        <div>
            <nav className="navbar w-full flex flex-wrap items-center justify-between">
                <ul className="w-full flex flex-wrap items-center justify-between">
                    <li className={`${sectionSelected === "My Portfolio" && 'navActive'}`}>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle className="text-blue font-bold" as={NavLink}>My Portfolio</Dropdown.Toggle>
                            <Dropdown.Menu>
                            {projects.map((project, i) => (
                                        <Dropdown.Item href="#" key={project.name}
                                            onClick={(e) => {
                                                console.dir(e.target)
                                                setSectionSelected("My Portfolio");
                                                setCurrentProject(projects[i]);
                                            }}
                                        >{project.name}</Dropdown.Item>    
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    {sections.map((section) => (
                        <li 
                        className={`${sectionSelected === `${section.name}` && 'navActive'} `}
                        key={section.name}
                        >
                            <span className="text-blue font-bold" onClick={(e) => {
                                // console.log(e.target.textContent)
                                setSectionSelected(section.name);
                            }}>{section.name}</span>
                        </li>                        
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;