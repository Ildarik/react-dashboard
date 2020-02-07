import React, { useState } from "react";
import { Input, InputWrapper } from "../Modals/styled";
import styled from "styled-components";
import Button from "../Button";
import { login } from "../../actions";
import { useDispatch } from "react-redux";

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled(Centered)`
  height: 90vh;
  flex-direction: column;
  align-items: center;
`;

export default () => {
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
    dispatch(login({ ...formValues }));
  };

  const isFormEmpty = !Object.keys(formValues).length;

  return (
    <div className="container">
      <Wrapper>
        <h1>Login</h1>
        <form onSubmit={null}>
          <InputWrapper>
            <Input
              name="username"
              value={formValues.username || ""}
              onChange={handleChange}
              type="text"
              placeholder="usern@me"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="password"
              value={formValues.password || ""}
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
          </InputWrapper>
          <Centered>
            <Button
              disabled={isFormEmpty}
              color="primary"
              styles={isFormEmpty && "cursor: not-allowed"}
              onClick={handleSubmit}
            >
              GO
            </Button>
          </Centered>
        </form>
      </Wrapper>
    </div>
  );
};
