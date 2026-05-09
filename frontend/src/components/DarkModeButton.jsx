
import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <button onClick={() => setDarkMode(!darkMode)} className='bg-blue-500 border-none
     rounded-full hover:bg-blue-600 no-underline text-inherit md:mr-4 mr-2 md:py-2 md:px-4 py-1 px-3'>
      {darkMode ?  "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
// bg-blue-500 text-white px-4 py-2
//             rounded-full hover:bg-blue-600 no-underline text-inherit

export default DarkModeButton