import React, { useContext, useRef } from 'react';
import Select from 'react-select';
import { tricks } from '../Tricks';
import { AppContext } from "../App";
import { trickData } from '../TrickData';

function Search() {

    const green = "🟩";
    const red = "🟥";
    const eyes = "👀";
    const cool = "😎";
    const cry = "😢";

    const selectInputRef = useRef(null);
    const onClear = () => {
            selectInputRef.current.select.clearValue();
      };

    const { board, setBoard, 
        currAttempt, setCurrAttempt, 
        answer, 
        answerStr, setAnswerStr,
        shareBoard, setShareBoard
     } = useContext(AppContext);

    const shareBoardRow = (row) => {
        var line = "";
        var boardRow = board[row];

        for (let i = 0; i < 7; i++)
        {
            if (boardRow[i] === "✅")
            {
                line += green + " ";
            }
            else if (boardRow[i] === "❌")
            {
                line += red + " ";
            }
        }

        return line;
    }

    const createShareBoard = () => {

        const newShareBoard = [...shareBoard];

        var date1 = new Date("04/16/2022");
        var date2 = new Date();
        var daysPassed = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

        if (currAttempt.attempt === 1)
        {
            newShareBoard[0] = "Sk8le #" + daysPassed + " " + currAttempt.attempt +"/6 " + eyes;   
        }
        else if (currAttempt.attempt < 7)
        {
            newShareBoard[0] = "Sk8le #" + daysPassed + " " + currAttempt.attempt +"/6 " + cool;   
        }
        else
        {
            newShareBoard[0] = "Sk8le #" + daysPassed + " X/6 " + cry;
        }
        
        newShareBoard[1] = shareBoardRow(1);
        newShareBoard[2] = shareBoardRow(2);
        newShareBoard[3] = shareBoardRow(3);
        newShareBoard[4] = shareBoardRow(4);
        newShareBoard[5] = shareBoardRow(5);
        newShareBoard[6] = shareBoardRow(6);

        setShareBoard(newShareBoard);
    }

    const evaluate = (guess) => {
        if (guess.label === answer.answer.trickName)
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
            setAnswerStr({...answerStr, answerString: answer.answer.trickName});
            
            createShareBoard();

            setCurrAttempt({...currAttempt, attempt: 8});
        }
        else
        {
            const guessTrick = trickData[guess.value]
            const newBoard = [...board];
            
            if (guessTrick.stance === answer.answer.stance)
            {
                newBoard[currAttempt.attempt][0] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][0] = "❌";
            }

            if (guessTrick.shuv === answer.answer.shuv)
            {
                newBoard[currAttempt.attempt][1] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][1] = "❌";
            }

            if (guessTrick.shuvRotation === answer.answer.shuvRotation)
            {
                newBoard[currAttempt.attempt][2] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][2] = "❌";
            }

            if (guessTrick.flip === answer.answer.flip)
            {
                newBoard[currAttempt.attempt][3] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][3] = "❌";
            }

            if (guessTrick.flipAmount === answer.answer.flipAmount)
            {
                newBoard[currAttempt.attempt][4] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][4] = "❌";
            }

            if (guessTrick.spin === answer.answer.spin)
            {
                newBoard[currAttempt.attempt][5] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][5] = "❌";
            }

            if (guessTrick.spinRotation === answer.answer.spinRotation)
            {
                newBoard[currAttempt.attempt][6] = "✅";
            }
            else
            {
                newBoard[currAttempt.attempt][6] = "❌";
            }

            newBoard[currAttempt.attempt][7] = guess.label;
            setBoard(newBoard);
            setCurrAttempt({...currAttempt, attempt: currAttempt.attempt + 1});
            
        }
    }

    const setTrick = (trick) => {

        console.log(currAttempt.attempt);

        const newBoard = [...board];

        if (currAttempt.attempt < 7)
        {
            newBoard[currAttempt.attempt][7] = trick.label;
            evaluate(trick);
            setBoard(newBoard);
        }
        if (currAttempt.attempt > 5 && currAttempt.attempt < 8)
        {
            setAnswerStr({...answerStr, answerString: answer.answer.trickName});
            if (trick.label === answer.answer.trickName)
            {
                createShareBoard();
            }
            else
            {
                createShareBoard();
            }
        }

        console.log(currAttempt.attempt)
        onClear();
    }

  return (
      
    <div className="select">

        <Select
            placeholder="🛹 Search 🔎"
            arrowRendered={null}
            openMenuOnFocus={false}
            openMenuOnClick={false}
            isSearchable
            options={tricks}
            onChange={setTrick}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        />
        
    </div>
  )
}

export default Search