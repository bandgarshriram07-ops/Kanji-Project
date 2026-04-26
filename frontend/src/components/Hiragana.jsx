import React from "react";
import { useState, useEffect } from "react";

const Hiragana = () => {
  const [hiragana, setHiragana] = useState([]);

  async function handleDta() {
    const URL = `http://localhost:3000/hiragana`;
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setHiragana(jsonResponse);
  }
  useEffect(() => {
    handleDta();
  }, []);
  return (
   <div className="container mx-auto min-h-screen bg-[#f2d492] " >
    <h1 className="text-indigo-700 text-3xl font-bold
     text-center m-auto">Hiragana</h1>
     <div  className="grid grid-cols-5 ">
      {hiragana.map((Cha) => {
        return (
          <div key={Cha._id} className="my-4 mx-4 border-2 
          border-indigo-200 flex  flex-col justify-content items-center rounded-xl  bg-[#bbd1ea]">
            <p>{Cha.character}</p>
            <p>{Cha.romaji}</p>
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default Hiragana;
