import React from "react";
import NavBarChild from "./NavBa";


const Items =[
    {
        title:"home",
        url:"#",      // drop:["x","y","z"]
        id:Math.random()

  
    },
    {
        title:"Movies",
        url:" #",
        id:Math.random()
 
    },
    {
        title:"Detail",
        url:" #",
        id:Math.random()
       //drop:["x","y","z"]
    }
]


const NavBarParent =()=>{

    return (
        <nav className="NavBarParent">
            <NavBarChild  Array={Items} name="CINé" />
             
        </nav>
    )

}

export default NavBarParent