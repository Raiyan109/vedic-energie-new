import React, { useState } from "react";
import './category.css';
export default function category(){
    const [icon, seticon]=useState(false);
    const myFunction=()=> {
        // x.classList.toggle("fa-minus-circle");
        seticon(!icon);
    }
    
    return(
        <div >
            
             <div className="container">
        
        <div className="dropdown">
             
           
            <button type="button"
                    className="btn btn-success dropdown-toggle"
                     
                    data-toggle="dropdown">
                Dropdown
                <a >
                     
                    
                    <i onClick={myFunction}
                       className={icon?"fa fa-minus-circle":"fa fa-plus-circle"}></i>
                </a>
            </button>
             
           
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Option A</a>
                <a className="dropdown-item" href="#">Option B</a>
                <a className="dropdown-item" href="#">Option C</a>
                <a className="dropdown-item" href="#">Option D</a>
            </div>
        </div>
    </div>
  
         
        
       
   
            <select className="bg-white h-40 w-[1303px] border-2 border-darkblue" name="cars" id="cars">
            <option> category 1:</option>
            <option value="volvo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</option>
            </select>
        </div>
    )
}