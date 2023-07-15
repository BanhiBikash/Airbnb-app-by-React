import React from "react"
import group from "../images/group.png"

export default function Hero(){
    return(
        <div className="Hero">
            <img src={group} />
            
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all 
            without leaving home.
            </p>
        </div>
    )
}