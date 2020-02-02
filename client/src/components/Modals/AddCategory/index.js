import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../actions";
import Button from "../../Button";
import {
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputWrapper,
  Input
} from "../styled";


export default ({ toggle }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleChange = event => {
    setNewCategory(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addCategory(newCategory));
    toggle();
  };

  const isFormEmpty = !newCategory;

  return (
    <ModalWrapper>
      <ModalHeader>Add category</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              name="name"
              value={newCategory || ""}
              onChange={handleChange}
              type="text"
              placeholder="Name"
            />
          </InputWrapper>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          disabled={isFormEmpty}
          color="primary"
          styles={isFormEmpty && "cursor: not-allowed"}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </ModalFooter>
    </ModalWrapper>
  );
};
