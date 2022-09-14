import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";

// add logic to todo-list
// style the app

export default function App() {
  const [itemsList, setItemsList] = useState([]);

  function addItem(item) {
    setItemsList((prevValue) => {
      return [...prevValue, item];
    });
    console.log(itemsList);
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addItem}/>
      <ul>
        <TodoItem />
      </ul>
      <Footer />
    </div>
  );
}
