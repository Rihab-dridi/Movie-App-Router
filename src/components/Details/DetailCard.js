import React from 'react';
import {useParams} from 'react-router-dom';
import '../MovieList/MovieList.css';
import './Details.css'

const DetailCard = ({movies})=>{
    const {ID}=useParams();
    
    console.log(ID)
    console.log({movies})
    console.log({...movies})
    console.log(movies[2])
    
    
   

    return (
        <div className="DetailCard" >
                  <div>
                         <img className="poster" src={movies.find(movie=> movie.id==ID).img} alt="poster"/>
                         <h6 className="title"  style={{color:"gold"}}>{movies.find(movie=> movie.id==ID).title}</h6>
                         <p>{(movies.find(movie=> movie.id==ID)).Description}</p>
                   </div>

                     <div className="Details">
                         <h2 style={{color:"gold"}} >Description</h2>
                         <p style={{color:"white"}}> {(movies.find(movie=> movie.id==ID)).Detail}</p>
                         <iframe className="video" width="660" height="415" 
                          src={(movies.find(movie=> movie.id==ID)).trailer}
                          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                         </iframe>
                    </div>
                         
            
       

            
        </div>
    
    
    )}

export default DetailCard ; 