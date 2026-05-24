import React from "react";

/**
 * LoadingSpinner - A reusable spinner component
 * @param {Object} props
 * @param {string} props.message - Optional loading message to display (default: "Loading...")
 * @param {string} props.size - Spinner size: "sm", "md", "lg" (default: "md")
 * @param {boolean} props.fullScreen - If true, spans full screen height (default: false)
 */
const LoadingSpinner = ({
  message = "Loading...",
  size = "md",
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const spinnerSize = sizeClasses[size] || sizeClasses.md;
  const containerClass = fullScreen ? "min-h-screen" : "py-8";

  return (
    <div
      className={`flex items-center justify-center ${containerClass} bg-white dark:bg-gray-900`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated Spinner */}
        <div className={`relative ${spinnerSize}`}>
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
          {/* Animated spinner */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
        </div>
        {/* Loading message */}
        <p className="text-gray-600 dark:text-gray-400 font-medium text-center">
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
