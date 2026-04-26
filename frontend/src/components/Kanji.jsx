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
    <div>
      <h2 className="text-indigo-700 text-3xl font-bold text-center my-8">
        Kanji
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 
      p-5 w-[80%] mx-auto bg-sky-600 rounded-lg"
      >
        {kanji.map((k) => (
          <Link to={`/kanji/${k._id}`} key={k._id} >
            <div
              className="border border-indigo-600 p-4 m-4 text-center 
          h-[150px] flex flex-col justify-content items-center bg-sky-100 text-gray-800"
            >
              <h3 className="text-3xl font-bold text-indigo-700">
                {k.character}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                JLPT Level : {k.jlpt}N
              </p>
            </div>
          </Link>
        ))}s
      </div>
    </div>
  );
};

export default Kanji;
