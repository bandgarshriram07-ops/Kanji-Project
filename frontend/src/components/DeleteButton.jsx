import React from 'react'
import { useNavigate } from 'react-router-dom';
import {deleteKanji} from '../services/kanjiService'

const DeleteButton = ({id,isOwner}) => {
  const navigate = useNavigate();
  const handelDelete = async () => {
      if(!isOwner){
        alert("You are not the owner of this kanji");
        return;
      }else{
        try{
          await deleteKanji(id);
          alert("Kanji Deleted")
          console.log(id);
          navigate("/kanji");
         }catch(err){
          console.log(err);
         }
      }
    }
  
  return (
    <button className='bg-red-500 text-white px-4 py-1 shadow-md hover:bg-red-600
    hover:shadow-lg transition duration-200 rounded-lg border-none mx-2 mt-4' onClick={handelDelete}>
      Delete
    </button>

  )
}

export default DeleteButton