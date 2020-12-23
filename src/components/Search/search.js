import React,{useState} from 'react';
import Rate from '../rate'
import './search.css';

const Search = ({setSearch,search,setRating})=>{
    

    const searchHandler=(e)=>{
        setSearch(e.target.value)  
        
  }
  
    return (
        <div >

           
            <div className="search-bar">
            <input 
            type="text"
            placeholder="Search"
            onChange={searchHandler}
            className="search"
            autoFocus
            /> 
            <Rate  setRating={setRating}/>
            </div>
            
        </div>
    
    
    )}

export default Search