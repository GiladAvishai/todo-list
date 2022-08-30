import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


export default function InputArea() {
    return (
        <div>
            <form>
                <input />
                <Fab><AddIcon/></Fab>
            </form>
        </div>
    );
}