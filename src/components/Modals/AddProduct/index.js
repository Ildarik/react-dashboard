import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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

export default props => {
  const products = useSelector(state => state);
  const [formValues, setFormValues] = useState({});

  const handleChange = event => {
    const target = event.target;

    setFormValues({
      [target.name]: target.value
    });
  };

  return (
    <Styled>
      <form onSubmit={null}>
        <Input>
          <select
            name="category"
            value={formValues.category}
            onChange={handleChange}
          >
            {products.map((product, index) => (
              <option key={index} value={`${product.category}`}>
                {product.category}
              </option>
            ))}
          </select>
        </Input>
        <Input>
          <input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          ></input>
        </Input>
        <Input>
          <input
            name="purchase"
            value={formValues.purchase}
            onChange={handleChange}
            type="text"
            placeholder="Purchase"
          ></input>
        </Input>
        <Input>
          <input
            name="sale"
            value={formValues.sale}
            onChange={handleChange}
            type="text"
            placeholder="Sale"
          ></input>
        </Input>
      </form>
    </Styled>
  );
};
