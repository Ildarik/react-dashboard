import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../actions";
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
    toggle();
  };

  const isFormEmpty = !Object.keys(formValues).length;

  return (
    <Styled>
      <ModalHeader>Add product</ModalHeader>
      <ModalBody>
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
