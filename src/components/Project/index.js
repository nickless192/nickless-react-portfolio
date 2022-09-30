import React from "react";

function Project({currentProject}) {
    const {name, description, screenshotURL, githubURL} = currentProject;
    return(
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={require(`../../assets/projects/${screenshotURL}-screenshot.png`)} alt={name} />
            <a href={githubURL}>{githubURL}</a>
        </section>
    )
}

export default Project;