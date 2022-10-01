import React from "react";
import { Dropdown } from "react-bootstrap";

function Navigation ({currentProject, setCurrentProject, projects, sectionSelected, setSectionSelected}) {
    return (
        <div>
            <nav>
                <ul className="flex-row">
                    <li className={`${sectionSelected === "About Me" && 'navActive'}`}>
                        <span onClick={(e) => {
                            // console.log(e.target.textContent)
                            setSectionSelected(e.target.textContent);
                        }}>About Me</span>
                    </li>
                    <li className={`${sectionSelected === "My Portfolio" && 'navActive'}`}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                My Portfolio
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <span onClick={(e) => {
                                    console.log(e.target)
                                }}>
                                    {projects.map((project) => (
                                        <Dropdown.Item href="#" key={project.name}>{project.name}</Dropdown.Item>    
                                    ))}
                                </span>
                                {/* <Dropdown.Item href="#">Run Buddy</Dropdown.Item>
                                <Dropdown.Item href="#">Horiseon</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <span onClick={(e) => {
                            // console.log(e.target.textContent)
                            setSectionSelected(e.target.textContent);
                        }}>My Portfolio</span>
                    </li>
                    <li className={`${sectionSelected === "My Resume" && 'navActive'}`}>
                        <span onClick={(e) => {
                            // console.log(e.target.textContent)
                            setSectionSelected(e.target.textContent);
                        }}>My Resume</span>
                    </li>
                    <li className={`${sectionSelected === "Contact Me" && 'navActive'}`}>
                        <span onClick={(e) => {
                            // console.log(e.target.textContent)
                            setSectionSelected(e.target.textContent);
                        }}>Contact Me</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;