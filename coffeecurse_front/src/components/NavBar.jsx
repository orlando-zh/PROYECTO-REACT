import React from 'react';
import { Link } from "react-router-dom";

const links = [
 {   name: "Home",
    href: "/home",
},
{
    name: "Modulo1",
    href: "/modulo1",
},
{
    name: "API",
    href: "/API",
},
];

const NavBar = () => {
    return(
        <div>
            {links.map((x) => (
                <Link to={x.href}>{x.name}</Link>
            ))}
        </div>
    );
};

export default NavBar;