import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addKanji } from "../services/kanjiService";

const AddKanji = () => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    character: "",
    meaning: "",
    onyomi: "",
    kunyomi: "",
    jlpt: "",
    exampleWords: "",
  });
  const handleChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...character,
      jlpt: Number(character.jlpt),
      exampleWords: character.exampleWords
        ? character.exampleWords
            .split(",")
            .map((word) => ({
              word: word.trim(),
              reading: "",
              meaning: "",
            }))
            .filter((item) => item.word.length > 0)
        : [],
    };

    let response = await addKanji(payload);
    console.log(response);
    if (!response.ok) {
      console.log(response.data.message);
        alert(response.data.message || "Failed to add kanji");
      return;
    }
    alert("Kanji added successfully");
    setCharacter({
      character: "",
      meaning: "",
      onyomi: "",
      kunyomi: "",
      jlpt: "",
      exampleWords: "",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center  ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center 
        justify-center gap-4 bg-gray-700 p-8 rounded-md shadow-md w-[60%] mt-6 rounded-xl mb-4 "
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <input
              type="text"
              name="character"
              value={character.character}
              onChange={handleChange}
              placeholder="Character"
              className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none"
            />
        </div>
        <div className="flex flex-col items-center justify-center gap-4" >
            <input
              type="text"
              name="meaning"
              value={character.meaning}
              onChange={handleChange}
              placeholder="Meaning"
              className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none"
            />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          name="onyomi"
          value={character.onyomi}
          onChange={handleChange}
          placeholder="Onyomi"
          className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          name="kunyomi"
          value={character.kunyomi}
          onChange={handleChange}
          placeholder="Kunyomi"
          className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none"
        />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          name="jlpt"
          value={character.jlpt}
          onChange={handleChange}
          placeholder="JLPT (1-5)"
          className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none"
        />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          name="exampleWords"
          value={character.exampleWords}
          onChange={handleChange}
          placeholder="Example words (comma separated)"
          className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none"
        />
        </div>
        <button type="submit" className="text-white bg-blue-500
            hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none
             w-[10rem] md:w-[15rem] mt-4">
          Add Kanji
        </button>
      </form>
    </div>
  );
};
export default AddKanji;