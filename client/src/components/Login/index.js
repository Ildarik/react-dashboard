import React from "react";
import { Input, InputWrapper } from "../Modals/styled";
import styled from "styled-components";

const Center = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <div className="container">
    <Center>
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
      </form>
    </Center>
  </div>
);
