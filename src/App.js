import React from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";

function App() {
  return (
    <div className="container">
      <Header>
        <Logo />
        <Button type="primary" styles="margin-right: 10px">
          Добавить товар
        </Button>
        <Button type="primary">Добавить категорию</Button>
      </Header>
      <DataGrid />
    </div>
  );
}

export default App;
