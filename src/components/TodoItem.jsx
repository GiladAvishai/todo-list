import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function TodoItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="form">
      <li>
        <button onClick={handleClick}>
          <DeleteOutlineIcon></DeleteOutlineIcon>
        </button>
        {props.itemName}
      </li>
      <hr/>
    </div>
  );
}
