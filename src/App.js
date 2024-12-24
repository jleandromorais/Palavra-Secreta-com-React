import { useState } from 'react';
import './App.css';
import { wordsList } from './Data/word';
// Components
import StartScreen from './componets/StartScrenn';
import Game from './componets/Game';
import GameOver from './componets/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    const categorias = Object.keys(words);
    const category = categorias[Math.floor(Math.random() * categorias.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log("Categoria:", category);  // Verifique a categoria escolhida
    console.log("Palavra escolhida:", word);  // Verifique a palavra escolhida

    return [word, category];
  };

  const startGame = () => {
    const [word, category] = pickWordAndCategory();
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(word.split(""));

    console.log("Palavra separada em letras:", word.split(""));  // Verifique as letras divididas

    setGameStage(stages[1].name);
  };

  const verify = () => {
    console.log("Fim do jogo");
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verify={verify} letters={letters} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
