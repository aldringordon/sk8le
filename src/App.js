import './App.css';
import Board from './components/Board';
import Search from './components/Search';
import { createContext, useState } from 'react';
import { boardDefault } from './Words';
export const AppContext = createContext();

// https://www.youtube.com/watch?v=WDTNwmXUz2c&t=240s

function App() {

  const[board, setBoard] = useState(boardDefault);


  return (
    <div className="App">
      
      <nav>
        <h1>Sk8le</h1>
      </nav>

      <div className="search">
        <Search />
      </div>
      
      

      <AppContext.Provider value={{ board, setBoard}}>
        <div className="game">
          <Board />
          
        </div>
        
      </AppContext.Provider>

      

    </div>
  );
}

export default App;
