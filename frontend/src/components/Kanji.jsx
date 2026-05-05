import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Kanji = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get("jlpt");
  let [kanji, setKanji] = useState([]);

  let fetchApi = async (Level ) => {
      let URL = "http://localhost:3000/api/kanji";
      if (Level) {
         URL = `http://localhost:3000/api/kanji?jlpt=${Level}`;
      }
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setKanji(data));
    };
  
    useEffect(() => {
      fetchApi(level );
    }, [level]);

  return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 
      p-5 w-[100%]   rounded-lg"
      >
        {kanji.map((k) => (
          <Link to={`/kanji/${k._id}`} key={k._id} className="no-underline text-inherit">
            <div
              className="p-4 m-4 text-center 
          h-[180px] flex flex-col justify-content items-center bg-sky-100 hover:bg-sky-200
          cursor-pointer transition duration-300 ease-in-out rounded-lg shadow-lg" 
            >
              <h3 className="text-3xl font-bold no-underline text-inherit">
                {k.character}
              </h3>
              <p className="mt-1 text-sm font-bold">
                JLPT Level : <span className="text-blue-700">{k.jlpt}N</span>
              </p>
              <p className="text-sm font-bold">Meaning : <span className="text-blue-700">{k.meaning}</span></p>
            </div>
          </Link>
        ))}s
      </div>
  );
};

export default Kanji;
