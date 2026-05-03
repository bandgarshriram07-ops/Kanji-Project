import React from "react";
import { useEffect, useState } from "react";
import { HomeLinks } from "./HomeLinks";



const Home = () => {
  const [jlptLevels, setJlptLevels] = useState([]);

  console.log(jlptLevels);

  return (
    <div className="bg-[#f2d492]  min-h-screen ">
      <div className="flex justify-center align-center flex-col items-center gap-2 ">
        <h3 className="text-2xl font-bold mt-2 text-center">日本語の漢字を学ぼう</h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <HomeLinks />
       
      </div>
    </div>
  );
};

export default Home;
