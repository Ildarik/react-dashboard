import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../actions";
import Button from "../../Button";
import { ModalWrapper, ModalBody, ModalFooter } from "../styled";

export default ({ toggle, productId, productName }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(removeProduct(productId));
    toggle();
  };

  return (
    <ModalWrapper>
      <ModalBody styles="margin-top: 24px">
        Are you sure to remove product "{productName}"?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" styles="margin: 0 12px;" onClick={handleSubmit}>
          Yes
        </Button>
        <Button onClick={toggle}>No</Button>
      </ModalFooter>
    </ModalWrapper>
  );
};
