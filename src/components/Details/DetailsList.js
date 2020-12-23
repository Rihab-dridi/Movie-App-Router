import React,{component} from 'react';
import Details from './Details';
import '../MovieList/MovieList.css';
import './Details.css'


const MovieList = ({movies})=>{

   
    return (
        <div >
            
            <div >
            
            <div className="List"  > 
            {movies.map((movie,i)=> <Details key ={i} movie={movie} />)}
            </div>
            </div>
            
        </div>
    
    
    )}

export default MovieList