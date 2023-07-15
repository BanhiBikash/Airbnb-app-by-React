import React from "react"
import Star from "../images/Star.png"

export default function Card(props){
    return(
            <div className="Card">
                {props.x.openSpots === 0 && <div className="spots">SOLD OUT</div>}
                <img src={props.x.img} alt="Swimmer" />
                <div className="ranking">
                    <img src={Star} alt="Star" />
                    <p className="rating"> {props.x.rating} </p>
                    <p> ({props.x.ranking}).{props.x.country}</p>
                </div>

                <p>{props.x.title}</p>
                <p><b>From ${props.x.price}</b> / person</p>
            </div>
    )
}