import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import addProduct from "./components/Modals/addProduct";

const nameInput = <input placeholder="Name"></input>;

const addCategory = {
  modalHeader: "Add category",
  modalBody: nameInput,
  modalFooter: "Save"
};

export default () => {
  const [modalType, setModalType] = useState(null);
  const { isShowing, toggle } = useModal();

  const showModal = type => () => {
    setModalType(type);
    toggle();
  };

  return (
    <div className="container">
      <Header>
        <Logo />
        <Button
          onClick={showModal(addProduct)}
          type="primary"
          styles="margin: 0 12px;"
        >
          Add product
        </Button>
        <Button onClick={showModal(addCategory)} type="primary">
          Add category
        </Button>
      </Header>
      <DataGrid showModal={showModal} />
      <Modal {...modalType} isShowing={isShowing} hide={toggle} />
    </div>
  );
};
