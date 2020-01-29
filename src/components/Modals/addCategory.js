import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.div`
  margin: 8px;
  text-align: center;

  & * {
    min-width: 200px;
  }
`;

const modalBody = (
  <Styled>
    <Input>
      <input placeholder="Name"></input>
    </Input>
  </Styled>
);

export default {
  modalHeader: "Add category",
  modalBody: modalBody,
  modalFooter: "Save"
};
