import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const KanjiDetails = () => {
    const {id} = useParams();
    const [kanji, setKanji] = useState(null);

    useEffect (() => {
        const fetchKanjiDetails = async () => {
            try{
                const response = await fetch(`http://localhost:3000/api/kanji/${id}`);
                const data = await response.json();
                setKanji(data);

            }catch(error){
                console.error("Error fetching kanji details:", error);
            }
        };

        fetchKanjiDetails();
    }, [id]);
  return (
    <div>
      <h1>Kanji Details</h1>
      <div>
        {kanji && (
          <>
            <h2>{kanji.character}</h2>
            <p>JLPT Level: {kanji.jlpt}N</p>
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
                      <strong>{word.word}</strong> ({word.reading}) - {word.meaning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default KanjiDetails
