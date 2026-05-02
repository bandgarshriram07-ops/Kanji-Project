import React from "react";
import { useState } from "react";

const AddKanji = () => {
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
    const URL = `http://localhost:3000/api/kanji`;
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

    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    let jsonResponse = await response.json();
    if (!response.ok) {
      alert(jsonResponse.message || "Failed to add kanji");
      return;
    }
    console.log(jsonResponse);
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
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-[#f2d492]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center 
        justify-center gap-4 bg-white p-8 rounded-md shadow-md w-[50%] mx-auto rounded-xl bg"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <input
              type="text"
              name="character"
              value={character.character}
              onChange={handleChange}
              placeholder="Character"
              className="border-2 border-gray-300 rounded-md p-2 sm:mx-auto"
            />
        </div>
        <div className="flex flex-col items-center justify-center gap-4" >
            <input
              type="text"
              name="meaning"
              value={character.meaning}
              onChange={handleChange}
              placeholder="Meaning"
              className="border-2 border-gray-300 rounded-md p-2"
            />
        </div>
        <div>
        <input
          type="text"
          name="onyomi"
          value={character.onyomi}
          onChange={handleChange}
          placeholder="Onyomi"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        </div>
        <input
          type="text"
          name="kunyomi"
          value={character.kunyomi}
          onChange={handleChange}
          placeholder="Kunyomi"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="jlpt"
          value={character.jlpt}
          onChange={handleChange}
          placeholder="JLPT (1-5)"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="exampleWords"
          value={character.exampleWords}
          onChange={handleChange}
          placeholder="Example words (comma separated)"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Add Kanji
        </button>
      </form>
    </div>
  );
};
export default AddKanji;