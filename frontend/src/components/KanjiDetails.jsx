import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams, Link ,useNavigate} from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { fetchKanjiById } from "../services/kanjiService";
import { useAuth } from "../context/AuthContext";

const KanjiDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [kanji, setKanji] = useState(null);
  const { user } = useAuth();

  const isOwner = user && kanji && user.id?.toString() === kanji.createdBy?.toString();
  console.log(isOwner);
  console.log(kanji);
  console.log(user);
 const handleEditButton = () => {
  if(!isOwner){
    alert("You are not the owner of this kanji");
    return;
  }else{
    navigate(`/kanji/${id}/edit`);
  }
 }
  
  useEffect(() => {
    const fetchKanjiDetails = async () => {
      const data = await fetchKanjiById(id);
      console.log(data);
      setKanji(data);
    };
    fetchKanjiDetails();
  }, []);

  return (
    <div className="py-6">
      {kanji && (
        <div
          className="flex flex-col items-center w-[18rem]  md:w-[24rem] h-[35rem]
           rounded-lg mx-auto max-w-md shadow-lg bg-white/80 backdrop-blur-lg text-black  " >
            <h1 className="md:text-md text-xl font-bold ">Kanji</h1>
          <h2 className="text-6xl font-bold mb-8">{kanji.character} </h2>
          <p className="font-bold">JLPT Level:<span  className="text-blue-700"> {kanji.jlpt}N</span></p>
          {/* Add more details as needed */}
          <p className="font-bold">Kanji meaning: <span  className="text-blue-700">{kanji.meaning}</span></p>
          <p className="font-bold">Onyomi:<sapn className="text-blue-700">{kanji.onyomi}</sapn></p>
          <p className="font-bold">Kunyomi: <sapn className="text-blue-700">{kanji.kunyomi}</sapn></p>
          {kanji.exampleWords && kanji.exampleWords.length > 0 && (
            <div>
              <ul>
                {kanji.exampleWords.map((word, index) => (
                  <li key={index}>
                    <strong>{word.word}</strong> ({word.reading})
                    {word.meaning}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr />
            <div className="flex  justify-space-evenly">
            <DeleteButton id={kanji._id} isOwner={isOwner} />
              <button onClick={handleEditButton} className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white front-bold 
              rounded-md overflow-hidden group cursor-pointer hover:scale-105 duration-300 border-none mx-2 pb-3 mt-4">
               <span className="text-sm z-10 ">Edit</span>
              </button>
      
          </div>
        </div>
      )}
   </div>
  );
};

export default KanjiDetails;
