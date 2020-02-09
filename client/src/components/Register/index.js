import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Input, InputWrapper } from "../Modals/styled";
import Button from "../Button";
import { register } from "../../actions";

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
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ ...formValues }, history));
  };

  const passwordConfirmed =
    formValues.confirm && formValues.confirm === formValues.password;

  return (
    <div className="container">
      <Wrapper>
        <h1>Registration</h1>
        <form onSubmit={null}>
          <InputWrapper>
            <Input
              name="username"
              value={formValues.username || ""}
              onChange={handleChange}
              type="email"
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
          <InputWrapper>
            <Input
              name="confirm"
              value={formValues.confirm || ""}
              onChange={handleChange}
              type="password"
              placeholder="confirm"
            />
          </InputWrapper>
          <Centered>
            <Button
              disabled={!passwordConfirmed}
              color="primary"
              styles={!passwordConfirmed && "cursor: not-allowed"}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Centered>
        </form>
      </Wrapper>
    </div>
  );
};
