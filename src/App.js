import './App.css';
import Board from './components/Board';
import Search from './components/Search';
import ShareBoard from './components/ShareBoard';
import { createContext, useEffect, useState } from 'react';
import { boardDefault, shareBoardDefault } from './Words';
import { trickData } from './TrickData';

export const AppContext = createContext("");

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
  const[answerStr, setAnswerStr] = useState({answerString: " "});

  const today = console.log(new Date(Date.now()).toLocaleString().split(',')[0]);
  const[lastDate, setLastDate] = useState(today);

  if (lastDate !== console.log(new Date(Date.now()).toLocaleString().split(',')[0]))
    {
      setBoard(boardDefault);
      setShareBoard(shareBoardDefault);
      setCurrAttempt({attempt: 1});
      setAnswerStr({answerString: " "});
      setLastDate(console.log(new Date(Date.now()).toLocaleString().split(',')[0]));
    }

  useEffect(() => {
    
    const savedBoard = JSON.parse(localStorage.getItem("savedBoard"));
    if (savedBoard) setBoard(savedBoard);

    const savedShaeBoard = JSON.parse(localStorage.getItem("savedShareBoard"));
    if (savedShaeBoard) setShareBoard(savedShaeBoard);
    
    const savedCurrAttempt = JSON.parse(localStorage.getItem("savedCurrAttempt"));
    if (savedCurrAttempt) setCurrAttempt(savedCurrAttempt);

    const savedAnswerStr = JSON.parse(localStorage.getItem("savedAnswerStr"));
    if (savedAnswerStr) setAnswerStr(savedAnswerStr); 

    const savedLastDate = JSON.parse(localStorage.getItem("savedLastDate"));
    if (savedLastDate) setLastDate(savedLastDate); 
    
  }, []);

  useEffect(() => {
    localStorage.setItem("savedBoard", JSON.stringify(board));
    localStorage.setItem("savedShareBoard", JSON.stringify(shareBoard));
    localStorage.setItem("savedCurrAttempt", JSON.stringify(currAttempt));
    localStorage.setItem("savedAnswerStr", JSON.stringify(answerStr));
    localStorage.setItem("savedLastDate", JSON.stringify(lastDate));

  }, [board, shareBoard, currAttempt, answerStr, lastDate]);



  return (
    <div className="App">
      
      <nav>
        <h1>Sk8le</h1>
      </nav>

      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, answer, answerStr, setAnswerStr, shareBoard, setShareBoard}}>

      

        <div className="game">

        <ShareBoard />

          <div className="answerString">
            {answerStr.answerString}
          </div>

          <div className="search">
            <Search />
          </div>

          

          <Board />

          
          
          <div className="credits">
            <form>Developer: Aldrin Gordon</form>
            <form>Quality Assurance: Joseph Gleason</form>
          </div>
        </div>
        
      </AppContext.Provider>

      

    </div>
  );
}

export default App;
