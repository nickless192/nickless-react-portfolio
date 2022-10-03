import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
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
        <div>
            <nav className="navbar w-full flex flex-wrap items-center justify-between">
                <ul className="w-full flex flex-wrap items-center justify-between">
                    <li>
                        <div>
                            <span
                                className={`${sectionSelected === "My Portfolio" && 'navActive'} text-blue font-bold`}
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
                                    "bg-white font-bold text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                                }
                            >
                                {projects.map((project, i) => (
                                    <p href="#" key={project.name}
                                        onClick={(e) => {
                                            console.dir(e.target)
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