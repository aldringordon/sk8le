import React, { useContext } from 'react'
import { AppContext } from "../App";

function Guess({ guessPos, attemptVal }) {

    const { board } = useContext(AppContext);
    const guess = board[attemptVal][guessPos];

  return (
    <div className="guess">{guess}</div>
  )
}

export default Guess