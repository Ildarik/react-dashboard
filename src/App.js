import React from "react";
import "./App.css";
import Button from "./components/Button";
import styled from "styled-components";
import logo from "./logo.svg";


const Logo = styled.img`
  height: 20vmin;
`;

function App() {
  return (
    <div className="container">
        <Logo src={logo} />
        <Button type="primary">Добавить товар</Button>
        <Button>Добавить категорию</Button>
        <Button type="danger">Удалить</Button>
      </header>
    </div>
  );
}

export default App;
