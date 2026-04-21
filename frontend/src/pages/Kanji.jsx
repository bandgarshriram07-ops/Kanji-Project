import React from "react";
import { useEffect, useState } from "react";

const Kanji = () => {
  let [kanji, setKanji] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch kanji
    const fetchKanji = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/kanji");
        const data = await response.json();
        setKanji(data);
      } catch (error) {
        console.error("Error fetching kanji:", error);
      }
    };

    fetchKanji();
  }, []);

  return (
    <div>
      <h2 className="text-red-500 text-lg font-bold text-center">Kanji</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {kanji.map((k) => (
          <div className="border border-indigo-600 p-4 m-4 text-center" key={k._id}>
            <h3 className="text-2xl font-bold">{k.character}</h3>
            <p>{k.meaning}</p>
            <p>{k.onyomi}</p>
            <p>{k.kunyomi}</p>
            <p>{k.jlpt}</p>
            <p>{k.exampleWords[0].word}</p>
            <p>{k.exampleWords[0].reading}</p>
            <p>{k.exampleWords[0].meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanji;
