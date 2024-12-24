import React from 'react'

const GameOver = ({retry}) => {
  return (
    <div className=" start flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
    <h1>Game over</h1>
  
  <button
        onClick={retry}
       className="bg-blue-800 text-white px-12 border-2 border-white rounded-full h-12 uppercase font-bold text-xl cursor-pointer transition-all duration-400 hover:bg-blue-900"
      > Voltar </button></div>
  )
}

export default GameOver