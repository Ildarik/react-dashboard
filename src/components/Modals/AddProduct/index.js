import React from "react";
import styled from "styled-components";
import Modal from "../../Modal";
import { useSelector } from "react-redux";

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
const modalHeader = "Add product";

const modalFooter = "Save";

const modalBody = products => (
  <Styled>
    <form onSubmit={null}>
      <Input>
        <select>
          {products.map((product, index) => (
            <option key={index} value={`${product.category}`}>
              {product.category}
            </option>
          ))}
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
    </form>
  </Styled>
);

export default props => {
  const products = useSelector(state => state);

  return (
    <Modal
      {...props}
      modalHeader={modalHeader}
      modalBody={modalBody(products)}
      modalFooter={modalFooter}
    />
  );
};
