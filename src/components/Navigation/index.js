import React from "react";

function Navigation () {
    return (
        <div>
            <nav>
                <ul className="flex-row">
                    <li>
                        <span onClick={(e) => {
                            console.log(e.target.textContent)
                        }}>My Portfolio</span>
                    </li>
                    <li>
                        <span onClick={(e) => {
                            console.log(e.target.textContent)
                        }}>About Me</span>
                    </li>
                    <li>
                        <span onClick={(e) => {
                            console.log(e.target.textContent)
                        }}>Contact Me</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;