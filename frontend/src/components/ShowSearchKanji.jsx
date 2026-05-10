import React from 'react'

const ShowSearchKanji = ({kanjiList = []}) => {
console.log(kanjiList);
  return (
    <div>
        {kanjiList.length === 0 ? (<h1 className="text-center text-2xl font-bold text-black">No kanji found</h1>) :
        (
            kanjiList.map((kanji, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="shadow-lg bg-white/80 backdrop-blur-lg text-black  w-[18rem]  md:w-[24rem] h-[35rem] my-3 mx-auto flex flex-col items-center justify-center rounded-lg">
                        <h2 className="text-6xl font-bold mb-8">{kanji.character} </h2>
                        <p className="font-bold">
                            JLPT Level:<span className="text-blue-700"> {kanji.jlpt}N</span>
                        </p>
                        {/* Add more details as needed */}
                        <p className="font-bold">
                            Kanji meaning:{" "}
                            <span className="text-blue-700">{kanji.meaning}</span>
                        </p>
                        <p className="font-bold">
                            Onyomi:<sapn className="text-blue-700">{kanji.onyomi}</sapn>
                        </p>
                        <p className="font-bold">
                            Kunyomi: <sapn className="text-blue-700">{kanji.kunyomi}</sapn>
                        </p>
                        <p className="font-bold">
                            Kunyomi: <sapn className="text-blue-700">{kanji.jlpt}</sapn>
                        </p>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}

export default ShowSearchKanji