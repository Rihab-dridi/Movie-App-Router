import React,{component} from 'react';
import Details from './Details';
import '../MovieList/MovieList.css';
import './Details.css'


const MovieList = ({movies, search,rating})=>{

   
    return (
        <div >
            
            <div >
            
            <div className="List"  > 
            {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase().trim()) && el.rate >= rating
        )
                .map((movie,i)=> <Details key ={i} movie={movie} />)}
            </div>
            
        </div>
        </div>
    
    
    )}

export default MovieList