import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Categories from "../Categories";
import mock from "../../mock";
import Modal from "../Modal";
import useModal from "../../hooks/useModal";

const DataGrid = styled.div`
  display: flex;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const Cell = styled.div`
  padding: 6px;
  width: ${props => (props.small ? "40px" : "120px")};
  vertical-align: middle;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  background-color: rgb(250, 250, 250);
  padding: 6px 0;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  line-height: 30px;
  transition: all 0.3s 0s;

  &:hover {
    background: rgb(230, 247, 255);
  }
`;

const nameInput = <input placeholder="Name"></input>;
const footerSave = <Button type="primary">Save</Button>;
const footerOkCancel = (
  <>
    <Button type="primary" styles="margin-right: 6px;">
      Save
    </Button>
    <Button>Cancel</Button>
  </>
);

const editProduct = {
  modalHeader: "Edit product",
  modalBody: nameInput,
  modalFooter: footerSave
};

const removeCategory = {
  modalHeader: "Do you want to remove category?",
  modalBody: `All products will be marked as "No category"`,
  modalFooter: footerOkCancel
};

const removeProduct = {
  modalBody: "Do you want to remove product id = ?",
  modalFooter: footerOkCancel
};

export default () => {
  const [modalType, setModalType] = useState(null);
  const { isShowing, toggle } = useModal();

  const showModal = type => {
    setModalType(type);
    toggle();
  };

  return (
    <>
      <DataGrid>
        <Categories />
        <Table>
          <Header>
            <Cell small>ID</Cell>
            <Cell>Name</Cell>
            <Cell>Purchase</Cell>
            <Cell>Sale</Cell>
          </Header>

          {mock.map(product => (
            <Row key={product.id}>
              <Cell small>{product.id}</Cell>
              <Cell>{product.name}</Cell>
              <Cell>{product.price}</Cell>
              <Cell>{product.sell}</Cell>
              <Cell>
                <Button type="danger" onClick={() => showModal(removeProduct)}>Remove</Button>
              </Cell>
              <Cell>
                <Button onClick={() => showModal(editProduct)}>Edit</Button>
              </Cell>
            </Row>
          ))}
        </Table>
      </DataGrid>
      <Modal {...modalType} isShowing={isShowing} hide={toggle} />
    </>
  );
};
