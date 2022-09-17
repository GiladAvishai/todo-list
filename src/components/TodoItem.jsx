import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function TodoItem(props) {
  return (
    <div>
      <li>
        {props.itemName}
        <div>
          <button>
            <DeleteOutlineIcon></DeleteOutlineIcon>
          </button>
        </div>
      </li>
    </div>
  );
}
