import React from 'react'
import Letter from './Letter';
import Guess from './Guess';

function Board() {
    

  return (
    <div  className="board">
        {" "}
        <div className="row">
            <Guess guessPos={0} attemptVal={0}/>
            <Guess guessPos={1} attemptVal={0}/>
            <Guess guessPos={2} attemptVal={0}/>
            <Guess guessPos={3} attemptVal={0}/>
            <Guess guessPos={4} attemptVal={0}/>
            <Guess guessPos={5} attemptVal={0}/>
            <Guess guessPos={6} attemptVal={0}/>
            <Guess guessPos={7} attemptVal={0}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={1}/>
            <Letter letterPos={1} attemptVal={1}/>
            <Letter letterPos={2} attemptVal={1}/>
            <Letter letterPos={3} attemptVal={1}/>
            <Letter letterPos={4} attemptVal={1}/>
            <Letter letterPos={5} attemptVal={1}/>
            <Letter letterPos={6} attemptVal={1}/>
            <Guess guessPos={7} attemptVal={1}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={2}/>
            <Letter letterPos={1} attemptVal={2}/>
            <Letter letterPos={2} attemptVal={2}/>
            <Letter letterPos={3} attemptVal={2}/>
            <Letter letterPos={4} attemptVal={2}/>
            <Letter letterPos={5} attemptVal={2}/>
            <Letter letterPos={6} attemptVal={2}/>
            <Guess guessPos={7} attemptVal={2}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={3}/>
            <Letter letterPos={1} attemptVal={3}/>
            <Letter letterPos={2} attemptVal={3}/>
            <Letter letterPos={3} attemptVal={3}/>
            <Letter letterPos={4} attemptVal={3}/>
            <Letter letterPos={5} attemptVal={3}/>
            <Letter letterPos={6} attemptVal={3}/>
            <Guess guessPos={7} attemptVal={3}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={4}/>
            <Letter letterPos={1} attemptVal={4}/>
            <Letter letterPos={2} attemptVal={4}/>
            <Letter letterPos={3} attemptVal={4}/>
            <Letter letterPos={4} attemptVal={4}/>
            <Letter letterPos={5} attemptVal={4}/>
            <Letter letterPos={6} attemptVal={4}/>
            <Guess guessPos={7} attemptVal={4}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={5}/>
            <Letter letterPos={1} attemptVal={5}/>
            <Letter letterPos={2} attemptVal={5}/>
            <Letter letterPos={3} attemptVal={5}/>
            <Letter letterPos={4} attemptVal={5}/>
            <Letter letterPos={5} attemptVal={5}/>
            <Letter letterPos={6} attemptVal={5}/>
            <Guess guessPos={7} attemptVal={5}/>
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={6}/>
            <Letter letterPos={1} attemptVal={6}/>
            <Letter letterPos={2} attemptVal={6}/>
            <Letter letterPos={3} attemptVal={6}/>
            <Letter letterPos={4} attemptVal={6}/>
            <Letter letterPos={5} attemptVal={6}/>
            <Letter letterPos={6} attemptVal={6}/>
            <Guess guessPos={7} attemptVal={6}/>
        </div>
    </div>
  );
}

export default Board