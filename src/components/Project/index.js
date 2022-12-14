import React from "react";

function Project({currentProject}) {
    const {name, description, screenshotURL, githubURL, deployedURL} = currentProject;
    return(
        <section
            className="flex flex-row">
            <div
                className="mr-2 w-1/2">
                <h2 
                    className="text-blue-300 text-2xl my-2"
                    >{name}</h2>
                <p
                    className="text-blue-700 my-3"
                >{description}</p>
                <a
                    className="block"
                href={githubURL}>Nagivate to GitHub Repository</a>
                <a 
                    className="block"
                href={deployedURL}>Link to Deployed Site</a>
            </div>
            <div
            className="w-1/2">
                <img 
                    className="shadow rounded max-w-full h-auto align-middle border-none"
                    src={require(`../../assets/projects/${screenshotURL}-screenshot.png`)} alt={name} />
            </div>
        </section>
    )
}

export default Project;