import React,{component, useState} from 'react';
import Modal from 'react-modal';
import'./Add.css'
Modal.setAppElement('#root')

const Add = ({setMovies, addMovieHandler, addDetailHandler})=>{
const[add,setAdd]=useState(false)
const[title,setTitle]=useState('')
const[rate,setRate]=useState('')
const[img,setImg]=useState('')
const[description,setDescription]=useState('')
const[detail,setDetail]=useState('')
const[trailer,setTrailer]=useState('')


const addHandler = ()=>{
setAdd(!add)
}

const input =()=>{
 addMovieHandler({id:Math.random(), title:title,rate:rate, img:img, description:description })
 addDetailHandler({id:Math.random(), title:title,rate:rate, img:img, description:description,Detail:detail, trailer:trailer })
}

 const addTitle=(e)=>{
     setTitle(e.target.value)
     
 }
 const addImg=(e)=>{
    setImg(e.target.value)
}
const addRate=(e)=>{
    setRate(e.target.value)
}
const addDescription=(e)=>{
    setDescription(e.target.value)
}

const addDetail=(e)=>{
    setDetail(e.target.value)
}

const addTrailer=(e)=>{
    setTrailer(e.target.value)
}


  






    return (
        
        <div className="Add">
            <h1>I'm the Add</h1>
            <button className='add-btn' onClick={addHandler}><i className="far fa-plus-square"></i></button>
            <Modal className="Modal" isOpen={add}>
                <input type="text"
                       placeholder="Add a movie "
                       onChange={addTitle}
                       >
                </input><br/>
                <input type="text" 
                       placeholder="add Rate"
                       onChange={addRate}
                       />
               <br/>
                <input type="text"
                       placeholder="add Poster Link "
                       onChange={addImg}
                      />
                <br/>
                <input type="text"
                       placeholder="add description"
                       onChange={addDescription}
                 /><br/>
                 <input type="text"
                       placeholder="add Details"
                       onChange={addDetail}
                 /><br/>

                 
                 <input type="text"
                       placeholder="add trailer link"
                       onChange={addTrailer}
                 /><br/>
                <button onClick={input}>save</button>
                <button onClick={addHandler}>close</button>
            </Modal>
        </div>
    
    
    )}

export default Add