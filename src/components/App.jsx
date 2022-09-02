import React from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";

// add todoItem component and add to app
// add header and footer
// add logic to todo-list
// style the app

export default function App() {
    return (
    <div>
        <InputArea/>
        <ul>
            <TodoItem/>
        </ul>
    </div>);
}