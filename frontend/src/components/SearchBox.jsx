import React, { useState, useEffect } from "react";
import { getSearchKanji } from "../services/kanjiService";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [kanjiList, setKanjiList] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await getSearchKanji(search);
      setKanjiList(res);
      if(!res.ok){
        alert(res.message);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <div className="flex gap-2 p-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Kanji"
          className="rounded-lg p-2 text-black border-none outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg 
          border-none hover:bg-blue-600 no-underline text-inherit text-[13px]"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {kanjiList.map((kanji, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-2 p-2 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col">
            <h2 className="text-6xl font-bold mb-8">{kanji.character} </h2>
            <p className="font-bold">
              JLPT Level:<span className="text-blue-700"> {kanji.jlpt}N</span>
            </p>
            {/* Add more details as needed */}
            <p className="font-bold">
              Kanji meaning:{" "}
              <span className="text-blue-700">{kanji.meaning}</span>
            </p>
            <p className="font-bold">
              Onyomi:<sapn className="text-blue-700">{kanji.onyomi}</sapn>
            </p>
            <p className="font-bold">
              Kunyomi: <sapn className="text-blue-700">{kanji.kunyomi}</sapn>
            </p>
            <p className="font-bold">
              Kunyomi: <sapn className="text-blue-700">{kanji.jlpt}</sapn>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchBox;
