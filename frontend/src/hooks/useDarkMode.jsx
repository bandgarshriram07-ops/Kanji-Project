
import {useState,useEffect} from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('them') === 'dark'
    );
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('them', 'dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('them', 'light')
        }
    }, [darkMode])

  return [darkMode, setDarkMode];
}

export default useDarkMode
