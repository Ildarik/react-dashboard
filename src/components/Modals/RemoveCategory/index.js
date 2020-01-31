import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../../actions";
import Button from "../../Button";
import { NO_CATEGORY } from "../../../constants";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
  font-weight: bold;
`;

const ModalBody = styled.div`
  margin: 24px 0;
  padding: 24px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
`;

const ModalFooter = styled.div`
  margin-top: auto;
  padding: 12px 16px;
  text-align: center;
  background: transparent;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
`;

export default ({ toggle, category }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(removeCategory(category));
    toggle();
  };

  return (
    <Styled>
      <ModalHeader>Do you want to remove category {category}?</ModalHeader>
      <ModalBody>All products will be marked as "{NO_CATEGORY}"</ModalBody>
      <ModalFooter>
        <Button color="primary" styles="margin: 0 12px;" onClick={handleSubmit}>
          Yes
        </Button>
        <Button onClick={toggle}>No</Button>
      </ModalFooter>
    </Styled>
  );
};
