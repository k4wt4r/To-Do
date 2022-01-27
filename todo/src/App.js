import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login.jsx"
import Signup from "./components/Signup"
import Todo from "./components/Todo"
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todolist" element={<Todo />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
