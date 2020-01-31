import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../actions";
import Button from "../../Button";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.div`
  margin: 14px;
  text-align: center;

  & * {
    min-width: 200px;
    border: 1px solid #cccccc;
    padding: 4px;
  }
`;

const ModalHeader = styled.div`
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
  font-weight: bold;
`;

const ModalBody = styled.div`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
`;

const ModalFooter = styled.div`
  margin-top: auto;
  padding: 12px 16px;
  text-align: center;
  background: transparent;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
`;

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
    <Styled>
      <ModalHeader>Add category</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <Input>
            <input
              name="name"
              value={newCategory || ""}
              onChange={handleChange}
              type="text"
              placeholder="Name"
            />
          </Input>
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
    </Styled>
  );
};
