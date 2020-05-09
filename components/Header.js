import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function Header(props) {
    return (

        <header className="header bg-info">
            <a href="https://github.com/josephabdelfattah"> <h1 className="text-white">Joseph Abdelfattah </h1></a>
        </header>

    );
}

export default Header;