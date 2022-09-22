import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div>
      <h1>My List</h1>
      <input value={inputText} onChange={handleChange} />
      <Fab
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
