import React from "react";
import { useState } from "react";
import resume from "../../assets/personal/resume.pdf"

function Resume() {
    const [skills] = useState([
        {
            name: 'HTML'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'NodeJS'
        },
        {
            name: 'MySQL'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'ExpressJS'
        },
        {
            name: 'React'
        }
    ]);
    return (
        <section>
            <h2 
                    className="text-blue-300 text-2xl my-2"
                    >My Resume</h2>
            <div>
                <p>Click the link below to download my current resume.</p>
                <a href={resume} download="resume.pdf">My Resume</a>
            </div>
            <div>
                <h3>Some of my Amazing SKills!</h3>
                <ul className="list-disc ml-5">
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Resume;