import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../actions";
import Button from "../../Button";
import { NO_CATEGORY } from "../../../constants";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin: 14px;
  text-align: center;

  & * {
    min-width: 200px;
    border: 1px solid #cccccc;
    padding: 4px;
  }
`;

const Input = styled.input`
  border-radius: 2px;
`;

const ModalHeader = styled.div`
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
  font-size: 18px;
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

  const allId = products.map(product => product.id);
  const newId = Math.max(...allId) + 1;

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addProduct({ id: newId, ...formValues }));
    toggle();
  };

  const isFormEmpty = !Object.keys(formValues).length;

  return (
    <Styled>
      <ModalHeader>Add product</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <select
              style={{ borderRadius: 2 }}
              name="category"
              value={formValues.category || NO_CATEGORY}
              onChange={handleChange}
            >
              {categories.map((category, index) => (
                <option key={index} value={`${category}`}>
                  {category}
                </option>
              ))}
            </select>
          </InputWrapper>
          <InputWrapper>
            <Input
              name="name"
              value={formValues.name || ""}
              onChange={handleChange}
              type="text"
              placeholder="Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="price"
              value={formValues.price || ""}
              onChange={handleChange}
              type="text"
              placeholder="Purchase"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="sell"
              value={formValues.sell || ""}
              onChange={handleChange}
              type="text"
              placeholder="Sale"
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
    </Styled>
  );
};
