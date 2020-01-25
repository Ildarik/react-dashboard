import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const nameInput = <input placeholder="Name"></input>;
const footerSave = <Button type="primary">Save</Button>;

const addCategory = {
  modalHeader: "Add category",
  modalBody: nameInput,
  modalFooter: footerSave
};

const addProduct = {
  modalHeader: "Add product",
  modalBody: nameInput,
  modalFooter: footerSave
};

export default () => {
  const [modalType, setModalType] = useState(null);
  const { isShowing, toggle } = useModal();

  const showModal = type => {
    setModalType(type);
    toggle();
  };

  return (
    <div className="container">
      <Header>
        <Logo />
        <Button
          onClick={() => showModal(addProduct)}
          type="primary"
          styles="margin: 0 12px;"
        >
          Add product
        </Button>
        <Button onClick={() => showModal(addCategory)} type="primary">
          Add category
        </Button>
      </Header>
      <DataGrid />
      <Modal {...modalType} isShowing={isShowing} hide={toggle} />
    </div>
  );
};
