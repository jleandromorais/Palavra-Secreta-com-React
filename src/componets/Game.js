import React, { useState } from "react";

const Game = ({
  verify,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para verificar a letra
    verify(letter);
    setLetter(""); // Limpa o campo de entrada após a tentativa
  };

  return (
    <div className="game min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 text-white px-6 py-8 flex flex-col items-center">
      <p className="points text-lg font-bold mb-4">
        Pontuação: <span className="font-bold">{score}</span>
      </p>
      <h1 className="text-2xl font-bold mb-4">Adivinhe a Palavra</h1>
      <h3 className="tip text-lg mb-6">
        Dica sobre a palavra:{" "}
        <span className="text-yellow-300 font-semibold">{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer flex gap-4 mb-8 p-6 border-8 border-yellow-300">
        {letters.map((letter, i) => (
          <span
            key={i}
            className={`letter flex items-center justify-center text-5xl font-bold border-4 border-black h-24 w-24 uppercase ${
              guessedLetters.includes(letter)
                ? "bg-white text-black"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
      <div className="letterContainer text-center mb-6">
        <p className="text-lg mb-4">Tente adivinhar uma letra da palavra:</p>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4"
        >
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            className="h-12 w-12 text-center text-2xl border border-gray-300 rounded focus:outline-none"
          />
          <button className="bg-white text-blue-800 px-6 py-2 rounded uppercase font-bold text-lg hover:bg-gray-200 transition">
            Jogar!
          </button>
        </form>
      </div>
      <div className="wrongLettersContainer mt-6">
        <p className="text-lg mb-2">Letras já utilizadas:</p>
        <div className="flex gap-2">
          {wrongLetters.map((letter, i) => (
            <span key={i} className="text-red-500 font-bold">
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
