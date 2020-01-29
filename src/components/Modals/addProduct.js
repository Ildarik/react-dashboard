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
    border: 1px solid #cccccc;
  }
`;

const modalBody = (
  <Styled>
    <Input>
      <select>
        {/* {mock.map((product, index) => (
          <option key={index} value={`${product.category}`}>
            {product.category}
          </option>
        ))} */}
      </select>
    </Input>
    <Input>
      <input placeholder="Name"></input>
    </Input>
    <Input>
      <input placeholder="Purchase"></input>
    </Input>
    <Input>
      <input placeholder="Sale"></input>
    </Input>
  </Styled>
);

export default {
  modalHeader: "Add product",
  modalBody: modalBody,
  modalFooter: "Save"
};
