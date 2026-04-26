import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';

const DeleteButton = () => {
  let {id}= useParams();
  const navigate = useNavigate();
  const handelDelete = async () => {
    const URL =  `http://localhost:3000/api/kanji/${id}`;
      await fetch(URL,{
      method:"DELETE"
    })
    alert("Kanji Deleted")
    console.log(id);
    navigate("/kanji");
  }
  return (
    <div>
      <button onClick={handelDelete}>Delete Kanji</button>
    </div>
  )
}

export default DeleteButton