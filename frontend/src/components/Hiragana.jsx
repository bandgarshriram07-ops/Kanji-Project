import React from "react";
import { useState, useEffect } from "react";

const Hiragana = () => {
  const [hiragana, setHiragana] = useState([]);

  async function handleDta() {
    const URL = `http://localhost:3000/api/hiragana`;
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setHiragana(jsonResponse);
  }
  useEffect(() => {
    handleDta();
  }, []);
  return (
   <div className=" w-full min-h-screen bg-[#f2d492] mx-0 ">
    <h1 className="text-indigo-700 text-3xl font-bold
     text-center m-auto">Hiragana</h1>
     <div  className="grid grid-cols-5 gap-4">
      {hiragana.map((Cha) => {
        return (
          <div key={Cha._id} className="my-4 mx-4  flex  flex-col justify-content 
          items-center  bg-sky-100  shadow-lg rounded-lg">
            <p className="text-2xl font-bold py-2">{Cha.character}</p>
            <p className="text-xl">{Cha.romaji}</p>
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default Hiragana;
