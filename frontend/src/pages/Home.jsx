import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const [jlptLevels, setJlptLevels] = useState([]);

  console.log(jlptLevels);
  return (
    <div className="bg-[#f2d492] min-h-screen ">
      <div className="flex justify-center align-center flex-col items-center gap-2 m-auto ">
        <h1 className="text-3xl font-bold text-gray-800">Kanji Master</h1>
        <h3 className="text-xl font-semibold">日本語の漢字を学ぼう</h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <Link
          className="bg-red-500 text-white  p-2 rounded text-center shadow-md 
          hover:bg-red-600 transition duration-300 hover:shadow-lg hover:text-lg sm:mx-auto"
          to={"/kanji?jlpt=1"}
        >
          JLPT N1
          <ArrowForwardIosIcon className="ml-55" />
        </Link>
        <Link
          className="bg-orange-500 text-white p-2 rounded text-center shadow-md 
          hover:bg-orange-600 transition duration-300 hover:shadow-lg hover:text-lg"
          to={"/kanji?jlpt=2"}
        >
          JLPT N2
          <ArrowForwardIosIcon className="ml-55" />
        </Link>
        <Link
          className="bg-purple-500 text-white p-2 rounded text-center shadow-md 
          hover:bg-purple-600 transition duration-300 hover:shadow-lg hover:text-lg"
          to={"/kanji?jlpt=3"}
        >
          JLPT N3
          <ArrowForwardIosIcon className="ml-55" />
        </Link>
        <Link
          className="bg-blue-500 text-white p-2 rounded text-center shadow-md 
          hover:bg-blue-600 transition duration-300 hover:shadow-lg hover:text-lg"
          to={"/kanji?jlpt=4"}
        >
          JLPT N4
          <ArrowForwardIosIcon className="ml-55" />
        </Link>
        <Link
          className="bg-green-500 text-white p-2 rounded text-center shadow-md 
          hover:bg-green-600 transition duration-300 hover:shadow-lg hover:text-lg"
          to={"/kanji?jlpt=5"}
          variant="contained"
        >
          JLPT N5
          <ArrowForwardIosIcon className="ml-55" />
        </Link>
      </div>
      <div className="flex justify-content  items-center">
        <Link
          to={"/hiragana"}
          className="bg-[#dae3e5] border border-indigo-400 p-[0.7rem]  rounded-xl "
        >
          Hiragana
        </Link>
      </div>
    </div>
  );
};

export default Home;
