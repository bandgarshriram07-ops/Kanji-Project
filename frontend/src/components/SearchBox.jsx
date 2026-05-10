import React, { useState, useEffect } from "react";
import { getSearchKanji } from "../services/kanjiService";
import { useNavigate } from "react-router-dom";

const SearchBox = ({setKanjiList}) => {
    const navigate = useNavigate();
  const [search, setSearch] = useState("");
 

  const getKanji = async () => {
    const res = await getSearchKanji(search);
    console.log(res);
    console.log(res.data);
    return res;
  }

  const handleSearch = async () => {
    try {
      const res = await getKanji();
      setKanjiList(res.data);
      setSearch("");
      navigate("/search");
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
     </div>
  );
};

export default SearchBox;
