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
      <Modal show={showModal}>
        <h2>Do you want to remove category?</h2>
        <p>All products will be marked as "No category"</p>
        <div>
          <Button type="primary" styles={"min-width: 50px; margin-right: 10px"}>
            Yes
          </Button>
          <Button styles={"min-width: 50px"}>No</Button>
        </div>
      </Modal>
    </div>
  );
};
