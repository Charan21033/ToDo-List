import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever, MdLogin } from "react-icons/md";
import { baseURL } from '../utils/constant';
import axios from "axios";

const ToDo = ({text, id, setUpdateUI ,setShowPopup ,setPopupContent}) => {
  const deleteToDo =()=>{
    axios.delete(`${baseURL}/delete/${id}`).then(res =>{
      console.log(res.data);
      setUpdateUI((prevState) =>!prevState)
    })
  }
  
  const updateToDo =()=>{
   setPopupContent({text,id})
    setShowPopup(true)
  }  

  return (
    <div className='toDo'>{text}
    <div className='icons'>
        <AiFillEdit className='icon' onClick={updateToDo}/>
        <MdDeleteForever className='icon'onClick={deleteToDo} />
    </div>
    </div>
  )
}

export default ToDo