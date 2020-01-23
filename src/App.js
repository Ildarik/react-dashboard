import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";

export default () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <Header>
        <Logo />
        <Button
          onClick={() => setShowModal(!showModal)}
          type="primary"
          styles="margin-right: 10px; margin-left: 30px;"
        >
          Добавить товар
        </Button>
        <Button type="primary">Добавить категорию</Button>
      </Header>
      <DataGrid />
      <Modal show={showModal}>
        <h2>Хотите удалить категорию?</h2>
        <p>Все товары в этой категории будут помечены "Без категории"</p>
        <div>
          <Button type="primary" styles={"min-width: 50px; margin-right: 10px"}>
            Да
          </Button>
          <Button styles={"min-width: 50px"}>Нет</Button>
        </div>
      </Modal>
    </div>
  );
};
