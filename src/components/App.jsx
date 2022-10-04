import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [itemsList, setItemsList] = useState([]);

  function addItem(item) {
    setItemsList((prevValue) => {
      return [...prevValue, item];
    });
  }

  function deleteItem(id) {
    setItemsList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <InputArea onAdd={addItem} />
        <ul>
          {itemsList.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                onDelete={deleteItem}
                itemName={todoItem}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
