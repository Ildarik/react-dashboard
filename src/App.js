import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import styled from "styled-components";

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
          Add product
        </Button>
        <Button type="primary">Add category</Button>
      </Header>
      <DataGrid />
      <Modal
        showModal={showModal}
        modalHeader="Do you want to remove category?"
        modalBody={`All products will be marked as "No category"`}
      ></Modal>
    </div>
  );
};
