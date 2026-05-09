import React from "react";
import { useState, useEffect } from "react";

const Hiragana = () => {
  const [hiragana, setHiragana] = useState([]);

  async function handleDta() {
    const URL = `https://kanji-project-703o.onrender.com/api/hiragana`;
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setHiragana(jsonResponse);
  }
  useEffect(() => {
    handleDta();
  }, []);
  return (
   <div className=" w-[80%] min-h-screen  mx-auto text-black">
    <h1 className="text-indigo-700 text-3xl font-bold
     text-center m-auto mb-3 dark:text-white ">Hiragana</h1>
     <div  className="grid grid-cols-5 gap-4">
      {hiragana.map((Cha) => {
        return (
          <div key={Cha._id} className=" flex  flex-col justify-content 
          items-center bg-white/80  shadow-lg rounded-lg">
            <p className="text-xl font-bold md:py-2 py-0">{Cha.character}</p>
            <p className="text-sm py-0">{Cha.romaji}</p>
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default Hiragana;
