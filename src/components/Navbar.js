import React from "react"
import logo from "../images/airbnb.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}