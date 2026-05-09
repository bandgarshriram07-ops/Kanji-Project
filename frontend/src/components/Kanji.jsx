import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Kanji = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get("jlpt");
  let [kanji, setKanji] = useState([]);

  let fetchApi = async (Level ) => {
      let URL = "https://kanji-project-703o.onrender.com/api/kanji";
      if (Level) {
         URL = `https://kanji-project-703o.onrender.com/api/kanji?jlpt=${Level}`;
      }
      let response = await fetch(URL);
      const data = await response.json();
      setKanji(data);
    };

  
    useEffect(() => {
      fetchApi(level );
    }, [level]);

  return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4
        rounded-lg text-black dark:text-white "
      >
        {kanji.map((k) => (
          <Link to={`/kanji/${k._id}`} key={k._id} className="no-underline text-inherit">
            <div
              className="text-center  text-black
               h-[250px] flex flex-col justify-content items-center 
               cursor-pointer transition duration-300 ease-in-out rounded-lg shadow-lg  bg-white/80" 
            >
              <h3 className="text-5xl tex-gray-900 font-bold no-underline text-inherit">
                {k.character}
              </h3>
              <p className="text-sm font-semibold">
                Meaning : <span className="text-blue-700">{k.meaning}</span>
                </p>
              <p className=" text-sm font-semibold">
                JLPT Level : <span className="text-blue-700">{k.jlpt}N</span>
              </p>
                  <div className="w-10 h-1 rounded-full bg-blue-700 my-3"></div>
                </div>
          </Link>
        ))}
      </div>
  );
};

export default Kanji;
