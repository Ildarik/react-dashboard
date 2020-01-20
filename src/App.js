import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <header>
        <img src="" className="logo" />
        <Button type="primary">Добавить товар</Button>
        <Button>Добавить категорию</Button>
        <Button type="danger">Удалить</Button>
      </header>
    </div>
  );
}

export default App;
