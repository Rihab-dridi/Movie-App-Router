import React,{useState} from 'react';


const Rate = ({rating,setRating })=>{
    let arr = Array(5).fill(<i style={{color:"white"}} className="far fa-star"></i>)
    const [show,setShow] =useState(false)
    return (
        <div classeName="Rate">
            <button onClick={()=>{setRating(1); setShow(true)}} className="star-btn">{arr[0]}</button>
            <button onClick={()=>setRating(2)} className="star-btn">{arr[1]}</button>
            <button onClick={()=>setRating(3)} className="star-btn">{arr[2]}</button>
            <button onClick={()=>setRating(4)} className="star-btn">{arr[3]}</button>
            <button onClick={()=>setRating(5)} className="star-btn">{arr[4]}</button>
            
            
        </div>
    
    
    )}

export default Rate 