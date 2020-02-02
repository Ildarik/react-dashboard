import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../../../actions";
import Button from "../../Button";
import { NO_CATEGORY } from "../../../constants";
import {
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputWrapper,
  Input
} from "../styled";


export default ({ toggle, product }) => {
  const { categories } = useSelector(state => state);

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
    dispatch(editProduct({ ...product.id, ...formValues }));
    toggle();
  };

  useEffect(() => setFormValues(product), [product]);

  return (
    <ModalWrapper>
      <ModalHeader>Edit product</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <select
              style={{ borderRadius: 2 }}
              name="category"
              value={formValues.category || NO_CATEGORY}
              onChange={handleChange}
            >
              {categories.map(
                (category, index) =>
                  category && (
                    <option key={index} value={`${category}`}>
                      {category}
                    </option>
                  )
              )}
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
        <Button color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </ModalFooter>
    </ModalWrapper>
  );
};
