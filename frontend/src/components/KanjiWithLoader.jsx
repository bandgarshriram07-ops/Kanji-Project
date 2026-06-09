import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const KanjiWithLoader = () => {
  const [searchParams] = useSearchParams();
  const [kanji, setKanji] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const level = searchParams.get("jlpt");
  const API_BASE = "https://kanji-project-vuuf.onrender.com" || "http://localhost:3000";

  useEffect(() => {
    const fetchKanjiData = async () => {
      try {
        setLoading(true);
        setError(null);

        let URL = `${API_BASE}/api/kanji`;
        if (level) {
          URL = `${API_BASE}/api/kanji?jlpt=${level}`;
        }

        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Failed to fetch kanji data");
        }

        const data = await response.json();
        setKanji(data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKanjiData();
  }, [level]);

  // Loading Spinner Component
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Loading kanji data...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center p-6 bg-red-50 dark:bg-red-900 rounded-lg border border-red-200 dark:border-red-700">
          <h2 className="text-xl font-bold text-red-700 dark:text-red-200 mb-2">
            Error
          </h2>
          <p className="text-red-600 dark:text-red-300">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Empty State
  if (kanji.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
            No kanji data found
          </p>
        </div>
      </div>
    );
  }

  // Data Display
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4
      rounded-lg text-black dark:text-white"
    >
      {kanji.map((k) => (
        <Link
          to={`/kanji/${k._id}`}
          key={k._id}
          className="no-underline text-inherit"
        >
          <div
            className="text-center text-black
             h-[250px] flex flex-col justify-center items-center 
             cursor-pointer transition duration-300 ease-in-out rounded-lg shadow-lg bg-white/80 dark:bg-gray-800/80 hover:shadow-xl"
          >
            <h3 className="text-5xl text-gray-900 dark:text-white font-bold no-underline text-inherit">
              {k.character}
            </h3>
            <p className="text-sm font-semibold">
              Meaning : <span className="text-blue-700 dark:text-blue-400">{k.meaning}</span>
            </p>
            <p className="text-sm font-semibold">
              JLPT Level :{" "}
              <span className="text-blue-700 dark:text-blue-400">{k.jlpt}N</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KanjiWithLoader;
