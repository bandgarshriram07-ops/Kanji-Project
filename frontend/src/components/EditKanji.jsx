import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function KanjiEdit() {
  const { id } = useParams();
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
      try {
        const response = await fetch(`http://localhost:3000/api/kanji/${id}`);
        const kanji = await response.json();
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
      } catch (error) {
        console.log(error);
      }
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

  // add new example word
  const addExampleWord = () => {
    setFormData({
      ...formData,
      exampleWords: [
        ...formData.exampleWords,
        {
          word: "",
          reading: "",
          meaning: ""
        }
      ]
    });
  };

  // remove example word
  const removeExampleWord = (index) => {
    const updatedExamples = [...formData.exampleWords];
    updatedExamples.splice(index, 1);

    setFormData({
      ...formData,
      exampleWords: updatedExamples
    });
  };

  // PATCH request
  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/kanji/${editId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      console.log(data);
      alert("Kanji updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-[#f2d492]">
      <form
        className="flex flex-col items-center 
        justify-center gap-4 bg-white p-8 rounded-md shadow-md w-[50%] mx-auto rounded-xl bg">
      <h2>Edit Kanji</h2>

      <input
        type="text"
        name="character"
        placeholder="Character"
        value={formData.character}
        onChange={handleChange}
      />

      <input
        type="text"
        name="meaning"
        placeholder="Meaning"
        value={formData.meaning}
        onChange={handleChange}
      />

      <input
        type="text"
        name="onyomi"
        placeholder="Onyomi"
        value={formData.onyomi}
        onChange={handleChange}
      />

      <input
        type="text"
        name="kunyomi"
        placeholder="Kunyomi"
        value={formData.kunyomi}
        onChange={handleChange}
      />

      <input
        type="number"
        name="jlpt"
        placeholder="JLPT Level"
        value={formData.jlpt}
        onChange={handleChange}
      />

      <h3>Example Words</h3>

      {formData.exampleWords.map((example, index) => (
        <div key={index}>
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

          <button onClick={() => removeExampleWord(index)}>
            Remove
          </button>
        </div>
      ))}

      <button onClick={addExampleWord}>
        Add Example Word
      </button>

      <br />
      <br />

      <button onClick={handleUpdate}>
        Update Kanji
      </button>
      </form>
    </div>
  );
}

export default KanjiEdit;