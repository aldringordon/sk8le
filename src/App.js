import './App.css';
import Board from './components/Board';
import Search from './components/Search';
import { createContext, useState } from 'react';
import { boardDefault } from './Words';
import { trickData } from './TrickData';
export const AppContext = createContext();

// https://www.youtube.com/watch?v=WDTNwmXUz2c&t=240s

function App() {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const[board, setBoard] = useState(boardDefault);
  const[currAttempt, setCurrAttempt] = useState({attempt: 1});
  const[answer] = useState({answer: trickData[getRandomInt(trickData.length-1)]})
  const[answerStr, setAnswerStr] = useState({answerString: " "});

  return (
    <div className="App">
      
      <nav>
        <h1>Sk8le</h1>
      </nav>

      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, answer, answerStr, setAnswerStr}}>

      

        <div className="game">

          <div className="answerString">
            {answerStr.answerString}
          </div>

          <div className="search">
            <Search />
          </div>

          <Board />
        </div>
        
      </AppContext.Provider>

      

    </div>
  );
}

export default App;
