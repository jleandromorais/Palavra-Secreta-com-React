const GameStart = ({ startGame }) => {
    return (
      <div className=" start flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
        <h1 className="text-5xl mb-4">Secret Word</h1>
        <p className="text-yellow-400 mb-8">Clique no botão abaixo para começar a jogar</p>
        <button
          onClick={startGame}
         className="bg-blue-800 text-white px-12 border-2 border-white rounded-full h-12 uppercase font-bold text-xl cursor-pointer transition-all duration-400 hover:bg-blue-900"
        >
          Começar jogo
        </button>
      </div>
    );
  };
  
  export default GameStart;
  