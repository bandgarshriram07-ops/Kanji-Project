import React, { useState } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { fetchKanjiById ,updateKanji} from "../services/kanjiService";

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
        meaning: ""
      }
    ]
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
                    meaning: ""
                  }
                ]
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
      [e.target.name]: e.target.value
    });
  };

  // exampleWords input change
  const handleExampleChange = (index, e) => {
    const updatedExamples = [...formData.exampleWords];

    updatedExamples[index][e.target.name] = e.target.value;

    setFormData({
      ...formData,
      exampleWords: updatedExamples
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
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-[#f2d492]
     ">
      <form
        className="flex flex-col items-center 
        justify-center gap-4 bg-white p-8 rounded-md shadow-md w-[50%] 
        mx-auto rounded-xl  bg-sky-100 hover:bg-sky-200" onSubmit={handleUpdate}>
      <h2>Edit Kanji</h2>

     <div className="flex items-center justify-center gap-2 w-full">
        <label htmlFor="character">Character : </label>
        <input
        type="text"
        name="character"
        placeholder="Character"
        value={formData.character}
        onChange={handleChange}
      />

     </div>
     <div className="flex items-center justify-center gap-2 w-full">
      <label htmlFor="meaning">Meaning : </label>
      <input
        type="text"
        name="meaning"
        placeholder="Meaning"
        value={formData.meaning}
        onChange={handleChange}
      />
      </div>
      <div className="flex items-center justify-center gap-2 w-full">
        <label htmlFor="onyomi">Onyomi : </label>
      <input
        type="text"
        name="onyomi"
        placeholder="Onyomi"
        value={formData.onyomi}
        onChange={handleChange}
      />
      </div>
      <div className="flex items-center justify-center gap-2 w-full">
        <label htmlFor="kunyomi">Kunyomi : </label>
      <input
        type="text"
        name="kunyomi"
        placeholder="Kunyomi"
        value={formData.kunyomi}
        onChange={handleChange}
      />
      </div>
      <div className="flex items-center justify-center gap-2 w-full">
        <label htmlFor="jlpt">JLPT Level : </label>
      <input
        type="number"
        name="jlpt"
        placeholder="JLPT Level"
        value={formData.jlpt}
        onChange={handleChange}
      />
       </div>
      <h3>Example Words</h3>

      {formData.exampleWords.map((example, index) => (
        <div key={index} className="flex items-center justify-center gap-2 w-full">
          <input
            type="text"
            name="word"
            placeholder="Word"
            value={example.word}
            onChange={(e) => handleExampleChange(index, e)}
          />

          <input
            type="text"
            name="reading"
            placeholder="Reading"
            value={example.reading}
            onChange={(e) => handleExampleChange(index, e)}
          />

          <input
            type="text"
            name="meaning"
            placeholder="Meaning"
            value={example.meaning}
            onChange={(e) => handleExampleChange(index, e)}
          />
        </div>
      ))}
      <br />
      <br />
      <button type="submit">
        Update Kanji
      </button>
      </form>
    </div>
  );
}

export default EditKanji;