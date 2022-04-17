import React, { useContext } from 'react';
import { AppContext } from "../App";

function ShareBoard() {

    const { shareBoard } = useContext(AppContext);

    const copyToClipboard = () => {
        var text = shareBoard[0] + "\n";

        for (let i = 1; i < 7; i++)
        {
            if (shareBoard[i] !== "")
            {
                text += shareBoard[i] + "\n";
            }
        }

        navigator.clipboard.writeText(
            text
        )
    }

  return (
    <div className="answerString">
        <form>{shareBoard[0]}</form>
        <form>{shareBoard[1]}</form>
        <form>{shareBoard[2]}</form>
        <form>{shareBoard[3]}</form>
        <form>{shareBoard[4]}</form>
        <form>{shareBoard[5]}</form>
        <form>{shareBoard[6]}</form>

        <div className="button" >
            <button onClick={copyToClipboard}>
                Copy to Clipboard
            </button>
        </div>
    </div>
    
  )
}

export default ShareBoard
