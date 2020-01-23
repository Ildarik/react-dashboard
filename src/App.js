import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import styled from "styled-components";

const App = styled.div`
  ${({ showModal }) => showModal && "filter: blur(2px)"};
`;

export default () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <App>
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
        <Modal show={showModal} />
      </div>
    </App>
  );
};
