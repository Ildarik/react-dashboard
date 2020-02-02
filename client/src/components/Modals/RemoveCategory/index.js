import React from "react";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../../actions";
import Button from "../../Button";
import { NO_CATEGORY } from "../../../constants";
import { ModalWrapper, ModalHeader, ModalBody, ModalFooter } from "../styled";

export default ({ toggle, category }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(removeCategory(category));
    toggle();
  };

  return (
    <ModalWrapper>
      <ModalHeader>Are you sure to remove category {category}?</ModalHeader>
      <ModalBody styles="margin: 24px 0">
        All products will be marked as "{NO_CATEGORY}"
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
