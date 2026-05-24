import { useState, useEffect } from "react";

/**
 * useFetch - Custom hook for fetching data with loading and error states
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Optional fetch options (headers, method, etc.)
 * @returns {Object} { data, loading, error }
 */
export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          credentials: "include",
          ...options,
        });

        if (!response.ok) {
          throw new Error(
            `HTTP Error: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};
