import React, { useContext } from 'react'
import { AppContext } from "../App";

function CopyButton() {

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
    <>
        { (shareBoard[0] !== "") && 
        <button onClick={copyToClipboard}>Copy to Clipboard</button>}
    </>
  )
}

export default CopyButton

