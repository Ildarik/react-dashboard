import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import DataGrid from "../../components/DataGrid";
import Modal from "../../components/Modal";
import AddProduct from "../../components/Modals/AddProduct";
import AddCategory from "../../components/Modals/AddCategory/";
import Toggler from "../../components/Toggler";
import { getProducts, getCategories } from "../../actions";
import Logout from "../../components/Logout";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = () => {
      dispatch(getProducts());
      dispatch(getCategories());
    };
    fetchAPI();
  }, [dispatch]);

  return (
    <div className="container">
      <Header>
        <Logo />
        <Toggler
          renderTrigger={props => (
            <Button color="primary" styles="margin-right: 12px;" {...props}>
              Add product
            </Button>
          )}
          renderContent={props => (
            <Modal {...props}>
              <AddProduct {...props} />
            </Modal>
          )}
        />
        <Toggler
          renderTrigger={props => (
            <Button color="primary" {...props}>
              Add category
            </Button>
          )}
          renderContent={props => (
            <Modal {...props}>
              <AddCategory {...props} />
            </Modal>
          )}
        />
        <Logout />
      </Header>
      <DataGrid />
    </div>
  );
};
