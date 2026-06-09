import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";

/**
 * KanjiRefactored - Example component showing how to use useFetch hook
 * and LoadingSpinner component for cleaner code
 */
const KanjiRefactored = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get("jlpt");

  // Build URL based on level parameter
  const API_BASE = "https://kanji-project-vuuf.onrender.com" || "http://localhost:3000";
  const baseURL = `${API_BASE}/api/kanji`;
  const url = level ? `${baseURL}?jlpt=${level}` : baseURL;

  // Use the custom hook for data fetching
  const { data: kanji, loading, error } = useFetch(url);

  // Show spinner while loading
  if (loading) {
    return (
      <LoadingSpinner
        message="Loading kanji data..."
        size="md"
        fullScreen={true}
      />
    );
  }

  // Show error message if fetch failed
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center p-6 bg-red-50 dark:bg-red-900 rounded-lg border border-red-200 dark:border-red-700">
          <h2 className="text-xl font-bold text-red-700 dark:text-red-200 mb-2">
            Error Loading Data
          </h2>
          <p className="text-red-600 dark:text-red-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Show message if no data found
  if (!kanji || kanji.length === 0) {
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

  // Display kanji data
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg text-black dark:text-white">
      {kanji.map((k) => (
        <Link
          to={`/kanji/${k._id}`}
          key={k._id}
          className="no-underline text-inherit"
        >
          <div className="text-center h-[250px] flex flex-col justify-center items-center cursor-pointer transition duration-300 ease-in-out rounded-lg shadow-lg bg-white/80 dark:bg-gray-800/80 hover:shadow-xl">
            <h3 className="text-5xl text-gray-900 dark:text-white font-bold">
              {k.character}
            </h3>
            <p className="text-sm font-semibold">
              Meaning :{" "}
              <span className="text-blue-700 dark:text-blue-400">
                {k.meaning}
              </span>
            </p>
            <p className="text-sm font-semibold">
              JLPT Level :{" "}
              <span className="text-blue-700 dark:text-blue-400">
                {k.jlpt}N
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KanjiRefactored;
