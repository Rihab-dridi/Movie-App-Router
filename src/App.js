import React,{useState} from 'react';
import './App.css';
import Search from './components/Search/search';
import MovieList from './components/MovieList/MovieList';
import Add from './components/Add/Add';
import DetailList  from './components/Details/DetailsList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import DetailCard from './components/Details/DetailCard';


function App() {
  const [movies,setMovies]=useState( [
    {
      id:Math.random(),
      title:"Captain America",
      rate: 3,
      img:"https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_.jpg",
      Description:"Action || Science Fiction",
      Detail:`Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.`,
      trailer:"https://www.youtube.com/embed/6y3oHJnfnjU"},
    {
      id:Math.random(),
      title:"Captain Marvel",
      rate: 2,
      img:"https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg",
      Description:"Action || Science Fiction",
      Detail:"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      trailer:"https://www.youtube.com/embed/0LHxvxdRnYc"
    },
    { 
      id:Math.random(),
      title:"THOR ",
      rate: 4,
      img:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
      Description:"Action || Fantasy",
      Detail:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      trailer:"https://www.youtube.com/embed/vJUDu40Z_RY"

    },
    {
      id:Math.random(),
      title:"Iron Man 3 ",
      rate: 5,
      img:"https://static.posters.cz/image/750/affiches/avengers-endgame-i-am-iron-man-i76482.jpg",
      Description:"Action || Science Fiction",
      Detail:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      trailer:"https://www.youtube.com/embed/Ke1Y3P9D0Bc"
    }
  ])
  
  const addMovieHandler = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
  
  const [search,setSearch]= useState('')
  const [rating,setRating ]=useState('')
  

  return (
    <div className="App">
      <Router>
                  <NavBar/>

                  <Search setSearch={setSearch}
                  search={search}
                  setRating={setRating}
                  />
              
                  
                  <Route exact path='/'
                  render={()=> <img style={{ widht:"900px",height:"400px",paddingTop:"50px"}} 
                               src="https://i.pinimg.com/originals/ae/01/df/ae01dfe89339c4753e9972ec6d45e4da.gif"/>}/>

                  
                  <Route
                   path='/Movies'
                   render={(props) => (
                   <MovieList {...props}  movies={movies}
                   search={search}
                   rating={rating} />
                   
                    )}
                  />

                  <Route 
                  path="/Movies/Add"
                  render={(props)=>(
                    <Add  {...props} setMovies={setMovies}
                 addMovieHandler={addMovieHandler}
                 />
                  )}/>

                  
                  
                  <Route
                 path='/Detail-List'
                 render={(props) => (
                  <DetailList {...props} 
                  movies={movies}
                  search={search}
                  rating={rating} />
                  )}
                  />
                 
                  <Route path='/Detail/:ID' >
                    <DetailCard   
                    movies={movies}
                   />
                  </Route>
                  

                
                 
                  
                  
              
      </Router>
    </div>
  );
}

export default App;
