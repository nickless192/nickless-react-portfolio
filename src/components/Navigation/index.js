import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

function Navigation({ currentProject, setCurrentProject, projects, sectionSelected, setSectionSelected }) {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

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
    ]);
    return (
        
            <nav className="navbar flex flex-wrap items-center justify-between">
                <ul className="flex flex-wrap items-center justify-between ">
                    <li className="mx-2">
                        <div>
                            <span
                                className={`${sectionSelected === "My Portfolio" && 'text-blue-500'} text-blue font-bold cursor-pointer`}
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                }}
                            >
                                My Portfolio
                            </span>
                            <div
                                ref={popoverDropdownRef}
                                className={
                                    (dropdownPopoverShow ? "block " : "hidden ") +
                                    "bg-gray-200 font-bold text-base z-50 float-left list-none text-left rounded shadow-lg mx-2"
                                }
                                onMouseLeave={() => {
                                    closeDropdownPopover();
                                }}
                            >
                                {projects.map((project, i) => (
                                    <p 
                                    className="cursor-pointer"
                                    href="#" key={project.name}
                                        onClick={(e) => {
                                            setSectionSelected("My Portfolio");
                                            setCurrentProject(projects[i]);
                                            closeDropdownPopover();
                                        }}
                                    >{project.name}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                    {sections.map((section) => (
                        <li
                            className={`${sectionSelected === `${section.name}` && 'text-blue-500'} mx-2 `}
                            key={section.name}
                        >
                            <span className="text-blue font-bold cursor-pointer" onClick={(e) => {
                                // console.log(e.target.textContent)
                                setSectionSelected(section.name);
                            }}>{section.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        
    )
}

export default Navigation;