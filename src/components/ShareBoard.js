import React, { useContext } from 'react';
import { AppContext } from "../App";
import CopyButton from './CopyButton';

function ShareBoard() {

    const { shareBoard } = useContext(AppContext);

  return (
    <div className="answerString">
        <form>{shareBoard[0]}</form>
        <form>{shareBoard[1]}</form>
        <form>{shareBoard[2]}</form>
        <form>{shareBoard[3]}</form>
        <form>{shareBoard[4]}</form>
        <form>{shareBoard[5]}</form>
        <form>{shareBoard[6]}</form>
        <form>https://sk8le.netlify.app</form>

        <div className="button" >
            <CopyButton />
        </div>
    </div>
    
  )
}

export default ShareBoard
