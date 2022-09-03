import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


export default function InputArea() {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} />
                <Fab><AddIcon/></Fab>
            </form>
        </div>
    );
}