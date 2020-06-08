import React from "react";
import {CardItem} from "../card/card.component";
import './card-list.styles.css'

export const CardList=(props)=>{
    return(
        <div className='card-list'>
            {props.monsters.map(
                (monster)=>( <CardItem key={monster.id} monster={monster}/>
                ))}
        </div>
    )
}