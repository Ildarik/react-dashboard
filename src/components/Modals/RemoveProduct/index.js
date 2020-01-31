import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../actions";
import Button from "../../Button";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalBody = styled.div`
  margin-top: 24px;
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

export default ({ toggle, productId }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    dispatch(removeProduct(productId));
    toggle();
  };

  return (
    <Styled>
      <ModalBody>Are you sure to remove product {productId}?</ModalBody>
      <ModalFooter>
        <Button color="primary" styles="margin: 0 12px;" onClick={handleSubmit}>
          Yes
        </Button>
        <Button onClick={toggle}>No</Button>
      </ModalFooter>
    </Styled>
  );
};
