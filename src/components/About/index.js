import React from "react";
import profileImage from '../../assets/personal/profile-pic.jpg';

function About() {
    return(
        <section
        className="flex items-center justify-end">
            <div>
                <h2 
                    className="text-blue-300 text-2xl my-2"
                    >About Me</h2>
                <p
                className="w-1/2 text-blue-900 text-xl">
                    My name is Omar Rodriguez, I'm an intermediate web developer and this is my React Portfolio! <br />
                    
                    Full-stack web developer leveraging Mechanical engineering experience to provide unique perspectives on researching, problem-solving, and debugging to create reliable and adaptive web solutions. Earned a certificate in Full Stack Web Development from the University of Toronto Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in data analysis, teamwork, agile methodology and building projects from ideation to execution.
                </p>
            </div>
            <div>
                <img src={profileImage} alt="Omar in front of the CN Tower in Toronto" id="profile-pic" className="max-w-md h-auto align-middle border-none" />
            </div>
        </section>
    )
}

export default About;