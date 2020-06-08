import React from "react";
import './search-box.style.css'

export const Searchbox = ({placeholder,handleOnChange})=>{
    return(
        <input className='search' type='search' placeholder={placeholder} onChange={handleOnChange}/>
    )

}