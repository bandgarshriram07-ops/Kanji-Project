import React, { useState, useEffect } from 'react';
import { getKatakana } from '../services/kanjiService';

const Katakana = () => {
  const [katakana, setKatakana] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadKatakana = async () => {
      try {
        const response = await getKatakana();
        const data = Array.isArray(response) ? response : [];

        setKatakana(data);
        setError(data.length ? '' : 'No katakana data available');
      } catch (err) {
        console.error(err);
        setError('Unable to load katakana data');
        setKatakana([]);
      } finally {
        setLoading(false);
      }
    };

    loadKatakana();
  }, []);

  return (
    <div className="w-[80%] min-h-screen mx-auto text-black">
      <h1 className="text-indigo-700 text-3xl font-bold text-center m-auto mb-3 dark:text-white">
        Katakana
      </h1>

      {loading && <p className="text-center text-white">Loading...</p>}

      {error && (
        <p className="text-center text-red-700 bg-white rounded-lg p-3">
          {error}
        </p>
      )}

      <div className="grid grid-cols-5 gap-4">
        {katakana.map((Cha) => {
          return (
            <div
              key={Cha._id || Cha.character}
              className="flex flex-col justify-center items-center bg-white/80 shadow-lg rounded-lg"
            >
              <p className="text-xl font-bold">{Cha.character}</p>
              <p className="text-sm">{Cha.romaji}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Katakana;