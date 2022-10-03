import React from "react";
import profileImage from '../../assets/personal/profile-pic.jpg';

function About() {
    return(
        <section>
            <div>
                <h2>About Me</h2>
                <p>
                    My name is Omar Rodriguez, I'm an intermediate web developer <br />
                    and this is my React Portfolio! Nickless is a fun nickname <br />
                    I like to use, hence why you'll see it everywhere here.
                </p>
                <h3>Curious to know things I like? Here are a few:</h3>
                <ul>
                    <li>
                        Music
                    </li>
                    <li>
                        Web Development
                    </li>
                    <li>
                        Dancing
                    </li>
                    <li>
                        Squash (the sport)
                    </li>
                    <li>
                        ... and much more
                    </li>
                </ul>
            </div>
            <div className="w-6/12 sm:w-4/12 px-4">
                <img src={profileImage} alt="Omar in front of the CN Tower in Toronto" id="profile-pic" />
            </div>
        </section>
    )
}

export default About;