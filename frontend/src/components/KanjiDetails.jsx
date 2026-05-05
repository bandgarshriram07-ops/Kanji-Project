import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { fetchKanjiById } from "../services/kanjiService";
import { useAuth } from "../context/AuthContext";

const KanjiDetails = () => {
  const { id } = useParams();
  const [kanji, setKanji] = useState(null);
  const { user } = useAuth();

  const isOwner = user && kanji && user.id?.toString() === kanji.createdBy?.toString();
  
  useEffect(() => {
    const fetchKanjiDetails = async () => {
      const data = await fetchKanjiById(id);
      setKanji(data);
    };
    fetchKanjiDetails();
  }, []);

  return (
    <div className="py-8 "> 
      {kanji && (
        <div
          className="flex flex-col items-center w-[15rem]  md:w-[20rem]
           rounded-lg mx-auto bg-sky-100 hover:bg-sky-200 shadow-lg " >
            <h1 className="md:text-md text-xl font-bold ">Kanji</h1>
          <h2 className="text-6xl font-bold mb-8">{kanji.character} </h2>
          <p className="font-bold">JLPT Level:<span> {kanji.jlpt}</span> N</p>
          {/* Add more details as needed */}
          <p className="font-bold">Kanji meaning: <span>{kanji.meaning}</span></p>
          <p className="font-bold">Onyomi: {kanji.onyomi}</p>
          <p className="font-bold">Kunyomi: {kanji.kunyomi}</p>
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
          {isOwner && (
            <div>
            <DeleteButton id={kanji._id} />
            <Link to={`/kanji/${kanji._id}/edit`}>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Edit
              </button>
            </Link>
          </div>
          )}
        </div>
      )}
   </div>
  );
};

export default KanjiDetails;
