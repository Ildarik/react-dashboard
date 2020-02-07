import React from "react";
import { Input, InputWrapper } from "../Modals/styled";
import styled from "styled-components";
import Button from "../Button";

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled(Centered)`
  height: 90vh;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <div className="container">
    <Wrapper>
      <h1>Registration</h1>
      <form onSubmit={null}>
        <InputWrapper>
          <Input
            name="username"
            value={null || ""}
            onChange={null}
            type="text"
            placeholder="usern@me"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="password"
            value={null || ""}
            onChange={null}
            type="text"
            placeholder="password"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="confirm"
            value={null || ""}
            onChange={null}
            type="text"
            placeholder="confirm"
          />
        </InputWrapper>
        <Centered>
          <Button color="primary">Submit</Button>
        </Centered>
      </form>
    </Wrapper>
  </div>
);
