import React ,{useState,useEffect} from 'react'
import { getKatakana } from '../services/kanjiService'

const Katakana = () => {
    const [katakana, setKatakana] = useState([]);

    useEffect(() => {
     const res = async () => {
        let response = await getKatakana();
        setKatakana(response);
     }
        res();
        console.log(katakana);
    }, []);

  return (
    <div className=" w-[80%] min-h-screen  mx-auto text-black">
    <h1 className="text-indigo-700 text-3xl font-bold
     text-center m-auto mb-3 dark:text-white">Katakana</h1>
     <div  className="grid grid-cols-5 gap-4">
      {katakana.map((Cha) => {
        return (
          <div key={Cha._id} className=" flex flex-col justify-center items-center
          items-center  bg-white/80 shadow-lg rounded-lg">
            <p className="text-xl font-bold">{Cha.character}</p>
            <p className="text-sm">{Cha.romaji}</p>
          </div>
        );
      })}
    </div>
   </div>
  )
}

export default Katakana