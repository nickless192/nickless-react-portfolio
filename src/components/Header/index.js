import React from "react";
import Navigation from "../Navigation";

function Header () {
    return(
        <header className="flex-row">
            <h1>Nickless React Portfolio</h1>
            <Navigation />
        </header>
    )
}

export default Header;