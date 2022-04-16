import React, { useState, useContext } from 'react';
import Select, { makeAnimated } from 'react-select';
import { tricks } from '../Tricks';
import { AppContext } from "../App";
import { trickData } from '../TrickData';

function Search() {

    const { board, setBoard, currAttempt, setCurrAttempt, answer } = useContext(AppContext);

    const evaluate = (guess) => {
        if (guess.label == answer.answer.trickName)
        {
            const newBoard = [...board];
            newBoard[currAttempt.attempt][0] = "✅";
            newBoard[currAttempt.attempt][1] = "✅";
            newBoard[currAttempt.attempt][2] = "✅";
            newBoard[currAttempt.attempt][3] = "✅";
            newBoard[currAttempt.attempt][4] = "✅";
            newBoard[currAttempt.attempt][5] = "✅";
            newBoard[currAttempt.attempt][6] = "✅";
            newBoard[currAttempt.attempt][7] = guess.label;
            setBoard(newBoard);
        }
        else
        {
            const guessTrick = trickData[guess.value]
            const newBoard = [...board];

            if (guessTrick.stance == answer.answer.stance)
            {
                newBoard[currAttempt.attempt][0] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][0] = "❌";
            }

            if (guessTrick.shuv == answer.answer.shuv)
            {
                newBoard[currAttempt.attempt][1] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][1] = "❌";
            }

            if (guessTrick.shuvRotation == answer.answer.shuvRotation)
            {
                newBoard[currAttempt.attempt][2] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][2] = "❌";
            }

            if (guessTrick.flip == answer.answer.flip)
            {
                newBoard[currAttempt.attempt][3] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][3] = "❌";
            }

            if (guessTrick.flipAmount == answer.answer.flipAmount)
            {
                newBoard[currAttempt.attempt][4] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][4] = "❌";
            }

            if (guessTrick.spin == answer.answer.spin)
            {
                newBoard[currAttempt.attempt][5] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][5] = "❌";
            }

            if (guessTrick.spinRotation == answer.answer.spinRotation)
            {
                newBoard[currAttempt.attempt][6] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][6] = "❌";
            }

            newBoard[currAttempt.attempt][7] = guess.label;
            setBoard(newBoard);
        }
    }

    const setTrick = (trick) => {
        console.log(trick.label);
        console.log(currAttempt.attempt);

        const newBoard = [...board];

        newBoard[currAttempt.attempt][7] = trick.label;

        evaluate(trick);

        setCurrAttempt({...currAttempt, attempt: currAttempt.attempt + 1});
        setBoard(newBoard);
    }

  return (
      
    <div className="select">

        <Select
            placeholder="🛹 Search 🔎"
            isSearchable
            options={tricks}
            onChange={setTrick}
        
        />
        
    </div>
  )
}

export default Search

//https://www.youtube.com/watch?v=mZvKPtH9Fzo  


// <input type="text" placeholder="Search..." /> 