import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../actions";

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

export default () => {
  const { products, categories } = useSelector(state => state);

  const [formValues, setFormValues] = useState({});

  const handleChange = event => {
    const target = event.target;

    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addProduct({ id: products.length + 1, ...formValues }));
  };

  return (
    <Styled>
      <form onSubmit={handleSubmit}>
        <Input>
          <select
            name="category"
            value={formValues.category || "No category"}
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={`${category}`}>
                {category}
              </option>
            ))}
          </select>
        </Input>
        <Input>
          <input
            name="name"
            value={formValues.name || ""}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
        </Input>
        <Input>
          <input
            name="price"
            value={formValues.price || ""}
            onChange={handleChange}
            type="text"
            placeholder="Purchase"
          ></input>
        </Input>
        <Input>
          <input
            name="sell"
            value={formValues.sell || ""}
            onChange={handleChange}
            type="text"
            placeholder="Sale"
          ></input>
        </Input>
        <input type="submit" value="Submit" />
      </form>
    </Styled>
  );
};