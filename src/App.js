import React from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="container">
      <Header>
        <Logo />
        <Button type="primary">Добавить товар</Button>
        <Button type="primary">Добавить категорию</Button>
      </Header>
    </div>
  );
}

export default App;
