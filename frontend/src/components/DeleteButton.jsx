import React from 'react'
import { useNavigate } from 'react-router-dom';
import {deleteKanji} from '../services/kanjiService'

const DeleteButton = ({id}) => {
  const navigate = useNavigate();
  const handelDelete = async () => {
   try{
    await deleteKanji(id);
    alert("Kanji Deleted")
    console.log(id);
    navigate("/kanji");
   }catch(err){
    console.log(err);
   }
    }
  
  return (
    <button type="button" className="btn btn-danger" onClick={handelDelete}>
      Delete
    </button>

  )
}

export default DeleteButton