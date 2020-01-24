import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import styled from "styled-components";

const ModalHeader = styled.div`
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
`;

const ModalBody = styled.div`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
`;

const ModalFooter = styled.div`
  margin-top: auto;
  padding: 10px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
`;

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
        <ModalHeader>Do you want to remove category?</ModalHeader>
        <ModalBody>All products will be marked as "No category"</ModalBody>
        <ModalFooter>
          <Button styles="margin-right: 10px">Cancel</Button>
          <Button type="primary">OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
