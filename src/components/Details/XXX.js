import React,{component} from 'react';
import Details from './Details';
import '../MovieList/MovieList.css';
import './Details.css'
import DetailCard from './DetailCard';


const MovieList = ({movies})=>{

   
    return (
        <div >
            
            <div >
            
            <div className="List"  > 
            {movies.map((movie,i)=> <DetailCard key ={i} movie={movie} movies={movies} />)}
            </div>
            </div>
            
        </div>
    
    
    )}

export default MovieList