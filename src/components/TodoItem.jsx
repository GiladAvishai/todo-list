import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function TodoItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div>
      <li>
        {props.itemName}
        <div>
          <button onClick={handleClick}>
            <DeleteOutlineIcon></DeleteOutlineIcon>
          </button>
        </div>
      </li>
    </div>
  );
}
