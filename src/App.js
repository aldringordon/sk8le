import './App.css';
import Board from './components/Board';
import Search from './components/Search';
import ShareBoard from './components/ShareBoard';
import { createContext, useState } from 'react';
import { boardDefault, shareBoardDefault } from './Words';
import { trickData } from './TrickData';
export const AppContext = createContext();

// https://www.youtube.com/watch?v=WDTNwmXUz2c&t=240s

function App() {
  
  function getRandomInt(max) {
    var date1 = new Date("04/15/2022");
    var date2 = new Date();
    var daysPassed = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    var number = Math.floor(Math.PI * 0.1241353565371482 * max * daysPassed);
    return number % max;
  }

  const[board, setBoard] = useState(boardDefault);
  const[shareBoard, setShareBoard] = useState(shareBoardDefault)
  const[currAttempt, setCurrAttempt] = useState({attempt: 1});
  const[answer] = useState({answer: trickData[getRandomInt(trickData.length-1)]})
  //const[answer] = useState({answer: trickData[0]})
  const[answerStr, setAnswerStr] = useState({answerString: " "});

  return (
    <div className="App">
      
      <nav>
        <h1>Sk8le</h1>
      </nav>

      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, answer, answerStr, setAnswerStr, shareBoard, setShareBoard}}>

      

        <div className="game">

          <div className="answerString">
            {answerStr.answerString}
          </div>

          <div className="search">
            <Search />
          </div>

          

          <Board />

          <ShareBoard />
          
        </div>
        
      </AppContext.Provider>

      

    </div>
  );
}

export default App;
