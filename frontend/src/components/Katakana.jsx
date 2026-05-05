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
    <div className=" w-full min-h-screen  mx-0 ">
    <h1 className="text-indigo-700 text-3xl font-bold
     text-center m-auto">Katakana</h1>
     <div  className="grid grid-cols-5 gap-4">
      {katakana.map((Cha) => {
        return (
          <div key={Cha._id} className="my-4 mx-4  flex  flex-col justify-content 
          items-center  bg-sky-100  shadow-lg rounded-lg">
            <p className="text-2xl font-bold py-2">{Cha.character}</p>
            <p className="text-xl">{Cha.romaji}</p>
          </div>
        );
      })}
    </div>
   </div>
  )
}

export default Katakana