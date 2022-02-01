import React from "react";
import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);

  const AddHandler = (e) => {
    e.preventDefault();
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };
  const deleteItem = (dele) => {
    setItems(items.filter((item) => item !== dele));
  };

  return (
    <div className="todo-app">
      <div className="todo">
        <div className="todo-title">
          <h1>To Do</h1>
        </div>
        <form className="form-todo" onSubmit={AddHandler}>
          <input
            type="text"
            className="input-todo"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="add ToDo"
          />
          <button className="btn-addtodo" type="submit">
            +
          </button>
        </form>
        <div className="display-div">
          {items.map((element, index) => {
            return (
              <div className="dele-div">
                <div className="text-todo" key={index}>
                  {element}
                </div>
                <button
                  className="trash-btn"
                  onClick={() => deleteItem(element)}
                >
                  <span className="trash-icon" role="img" aria-label="trash">
                    \_/
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
