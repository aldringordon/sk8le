import React, { useContext } from 'react'
import { AppContext } from "../App";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

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

        text += "https://sk8le.vercel.app";

        navigator.clipboard.writeText(
            text
        )

        toast("Copied to clipboard! 😏", {position: toast.POSITION.TOP_CENTER, autoClose: 2000, theme: "light", hideProgressBar: true})
    }

  return (
    <>
        { (shareBoard[0] !== "") && 
        <button onClick={copyToClipboard}>Copy to Clipboard</button>}
    </>
  )
}

export default CopyButton

