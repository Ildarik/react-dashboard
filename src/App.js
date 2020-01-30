import React from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import AddProduct from "./components/Modals/AddProduct";
import addCategory from "./components/Modals/addCategory";
import Toggler from "./components/Toggler";

export default () => {
  return (
    <div className="container">
      <Header>
        <Logo />
        <Toggler
          renderTrigger={props => (
            <Button color="primary" styles="margin: 0 12px;" {...props}>
              Add product
            </Button>
          )}
          renderContent={props => (
            <Modal {...props} modalHeader="Add product" modalFooter="Save">
              <AddProduct />
            </Modal>
          )}
        />
        <Toggler
          renderTrigger={props => (
            <Button color="primary" {...props}>
              Add category
            </Button>
          )}
          renderContent={props => <Modal {...addCategory} {...props} />}
        />
      </Header>
      <DataGrid />
    </div>
  );
};
