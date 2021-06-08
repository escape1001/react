import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

function Nav(){
    return (
        <header className="gnb">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Nav;