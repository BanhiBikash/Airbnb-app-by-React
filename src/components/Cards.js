import React from "react"
import Card from "./Card"
import cardData from "./cardData"

export default function Cards(){
    //cardElements stores multiple Card elements each having a specified noof props
    //The data stored in cardElements is brought on from cardData file
    const cardElements = cardData.map( x => {
     return   <Card 
        key={x.title}
        x={x}
    />
})
return   <div className="Cards">{cardElements}</div>
}