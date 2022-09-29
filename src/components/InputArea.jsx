import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AAC4FF",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div id="inputarea" theme={theme}>
      <h1 id="listheader">My List</h1>
      <input value={inputText} onChange={handleChange} />
      <ThemeProvider theme={theme}>
        <Zoom in={true}>
          <Fab
            size="small"
            color="primary"
            onClick={() => {
              props.onAdd(inputText);
              setInputText("");
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </ThemeProvider>
    </div>
  );
}
