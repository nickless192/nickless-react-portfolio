import React from "react";

function Footer() {
    return (
        <footer
            className="my-5">
            <h2
                className="text-blue-700 font-bold">Made with ❤️ by Omar Rodriguez</h2>
            <p className="mb-2">
                &copy; 2023 Nickless192
            </p>
            <div className="text-blue-800 mb-2">
                <a href="https://github.com/nickless192" target="_blank" rel="noreferrer">Link to Github Account</a>
            </div>
            <div className="text-blue-800 mb-2">
                <a href="https://www.linkedin.com/in/omar-rodriguez26/" target="_blank" rel="noreferrer">Let's connect on LinkedIn!</a>
            </div>
            <div className="text-blue-800 mb-2">
                <a href="https://stackoverflow.com/users/18967473/omar-rodriguez" target="_blank" rel="noreferrer">Find me on StackOverflow</a>
            </div>
        </footer>
    )
}

export default Footer;