import React,{component} from 'react';
import {Link} from 'react-router-dom';
import './MovieList.css'
const MovieCard = ({movie,rating})=>{
    const array=[]
    const array2=[]
    array.length= movie.rate
    array2.length= 5 -movie.rate

    return (
        <div  >
            <h3>I'm the MovieCard </h3>
            <div className="MovieCard">
            <Link to={`/Detail/${movie.id}`}>
                <button className="movie" >
                    <>
                   <img className="poster" src={movie.img} alt="poster"/>
                   <h6 className="title" >{movie.title}</h6>
                   <span>{ array.fill(<i className="fas fa-star"></i>).concat(array2.fill(<i className="far fa-star"></i>))}</span>
                   <p>{movie.Description}</p>
                   </>
 
                <button  className="detail-btn" > Details <i class="fas fa-angle-double-right"></i>  </button>
                    
                </button>
                </Link> 
            </div> 
        </div>
    
    
    )}

export default MovieCard 