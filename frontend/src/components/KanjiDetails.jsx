import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { fetchKanjiById } from "../services/kanjiService";

const KanjiDetails = () => {
  const { id } = useParams();
  const [kanji, setKanji] = useState(null);

  useEffect(() => {
    const fetchKanjiDetails = async () => {
        const data = await fetchKanjiById(id);
        setKanji(data);
    };
    fetchKanjiDetails();
  }, [id]);
  
  return (
    <div className=" bg-[#f2d492]  min-h-screen  w-screen  flex flex-col items-center  ">
      <h1>Kanji Details</h1>
        {kanji && (
          <div className="flex flex-col items-center  
          p-6  rounded-md w-1/2 mx-auto bg-sky-100 hover:bg-sky-200 shadow-lg rounded-lg">
            <h2 className="text-6xl font-bold mb-8">{kanji.character}  </h2>
            <p>JLPT Level: {kanji.jlpt}N</p>
            {/* Add more details as needed */}
            <p>Kanji meaning: {kanji.meaning}</p>
            <p>Onyomi: {kanji.onyomi}</p>
            <p>Kunyomi: {kanji.kunyomi}</p>
            {kanji.exampleWords && kanji.exampleWords.length > 0 && (
              <div>
                <ul>
                  {kanji.exampleWords.map((word, index) => (
                    <li key={index}>
                      <strong>{word.word}</strong> ({word.reading}) -{" "}
                      {word.meaning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-center items-center gap-2">
            <DeleteButton id={kanji._id}/>
            <Link to={`/kanji/${kanji._id}/edit`}>
              <button className="bg-red-500 text-white p-2 rounded-md">Edit</button>
            </Link>
            </div>
          </div>
          
        )}
      </div>
  );
};

export default KanjiDetails;
