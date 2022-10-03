import React from "react";
import profileImage from '../../assets/personal/profile-pic.jpg';

function About() {
    return(
        <section
        className="flex flex-wrap">
            <div>
                <h2 
                    className="text-blue-300 text-2xl my-2"
                    >About Me</h2>
                <p
                className="w-1/2 text-blue-900 text-xl">
                    My name is Omar Rodriguez, I'm an intermediate web developer and this is my React Portfolio! Nickless is a fun nickname I like to use, hence why you'll see it everywhere here.
                </p>
            </div>
            <div className="w-1/2">
                <img src={profileImage} alt="Omar in front of the CN Tower in Toronto" id="profile-pic" />
            </div>
        </section>
    )
}

export default About;