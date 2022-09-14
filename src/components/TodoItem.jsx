import React from "react";

export default function TodoItem(props) {
    return (
        <div>
            <li>{props.itemName}</li>
        </div>
    );
}