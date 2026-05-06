import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchKanjiById, updateKanji } from "../services/kanjiService";

function EditKanji() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editId, setEditId] = useState(id);

  const [formData, setFormData] = useState({
    character: "",
    meaning: "",
    onyomi: "",
    kunyomi: "",
    jlpt: "",
    exampleWords: [
      {
        word: "",
        reading: "",
        meaning: "",
      },
    ],
  });

  useEffect(() => {
    const fetchKanji = async () => {
      const kanji = await fetchKanjiById(id);
      setEditId(kanji._id || id);
      setFormData({
        character: kanji.character || "",
        meaning: kanji.meaning || "",
        onyomi: kanji.onyomi || "",
        kunyomi: kanji.kunyomi || "",
        jlpt: kanji.jlpt || "",
        exampleWords:
          kanji.exampleWords?.length > 0
            ? kanji.exampleWords
            : [
                {
                  word: "",
                  reading: "",
                  meaning: "",
                },
              ],
      });
    };

    if (id) {
      fetchKanji();
    }
  }, [id]);

  // normal input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // exampleWords input change
  const handleExampleChange = (index, e) => {
    const updatedExamples = [...formData.exampleWords];

    updatedExamples[index][e.target.name] = e.target.value;

    setFormData({
      ...formData,
      exampleWords: updatedExamples,
    });
  };

  // PATCH request
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await updateKanji(editId, formData);
      console.log(res);
      alert("Kanji updated successfully");
      navigate(`/kanji/${editId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen " >
      <form
        className="flex flex-col items-center px-12 rounded-md shadow-md
            bg-gray-700  max-w-sm  rounded-xl mt-12 mb-6"onSubmit={handleUpdate}   >
        <h2 className="text-3xl font-bold text-center text-white px-20 ">
          Edit Kanji
        </h2>
          <input
            type="text"
            name="character"
            placeholder="Character"
            value={formData.character}
            onChange={handleChange}
            className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"
          />

       
          <input
            type="text"
            name="meaning"
            placeholder="Meaning"
            value={formData.meaning}
            onChange={handleChange}
            className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"
          />
    
           <input
            type="text"
            name="onyomi"
            placeholder="Onyomi"
            value={formData.onyomi}
            onChange={handleChange}
            className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none" 
                 />
      
          <input
            type="text"
            name="kunyomi"
            placeholder="Kunyomi"
            value={formData.kunyomi}
            onChange={handleChange}
            className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"/>
          <input
            type="number"
            name="jlpt"
            placeholder="JLPT Level"
            value={formData.jlpt}
            onChange={handleChange}
            className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"/>
      
        <h3 className="text-white">Example Words</h3>

        {formData.exampleWords.map((example, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 w-full"
          >
            <input
              type="text"
              name="word"
              placeholder="Word"
              value={example.word}
              onChange={(e) => handleExampleChange(index, e)}
              className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"
            />

            <input
              type="text"
              name="reading"
              placeholder="Reading"
              value={example.reading}
              onChange={(e) => handleExampleChange(index, e)}
              className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"
            />

            <input
              type="text"
              name="meaning"
              placeholder="Meaning"
              value={example.meaning}
              onChange={(e) => handleExampleChange(index, e)}
              className="mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none"
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white front-bold 
              rounded-md overflow-hidden group cursor-pointer hover:scale-105 duration-300 border-none mx-2 pb-3 my-4"
        >
          Update Kanji
        </button>
      </form>
    </div>
  );
}

export default EditKanji;
