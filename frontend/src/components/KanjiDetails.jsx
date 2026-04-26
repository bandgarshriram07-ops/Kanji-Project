import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const KanjiDetails = () => {
  const { id } = useParams();
  const [kanji, setKanji] = useState(null);

  useEffect(() => {
    const fetchKanjiDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/kanji/${id}`);
        const data = await response.json();
        setKanji(data);
      } catch (error) {
        console.error("Error fetching kanji details:", error);
      }
    };

    fetchKanjiDetails();
  }, [id]);
  return (
    <div className=" bg-[#f2d492] min-h-screen  w-screen  flex flex-col items-center ">
      <h1>Kanji Details</h1>
      <div className="flex flex-col items-center justify-center gap-4
       p-4 border-2 border-black rounded-md w-1/3 h-1/3 bg-[#eec170]">
        {kanji && (
          <>
            <h2 className="text-3xl font-bold">{kanji.character}</h2>
            <p >JLPT Level: {kanji.jlpt}N</p>
            {/* Add more details as needed */}
            <p>Kanji meaning: {kanji.meaning}</p>
            <p>Onyomi: {kanji.onyomi}</p>
            <p>Kunyomi: {kanji.kunyomi}</p>
            {kanji.exampleWords && kanji.exampleWords.length > 0 && (
              <div>
                <h3>Example Words:</h3>
                <ul>
                  {kanji.exampleWords.map((word, index) => (
                    <li key={index}>
                      <strong>{word.word}</strong> ({word.reading}) -{" "}
                      {word.meaning}
                    </li>
                  ))}
                </ul>
                <DeleteButton />
                <Link to={`/kanji/${kanji._id}/edit`}>
                  <button>Edit Kanji</button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default KanjiDetails;
