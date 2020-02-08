import React from "react";
import styled from "styled-components";

const Stub = styled.div`
  line-height: 90vh;
  text-align: center;
  font-size: 24px;
`;

const Auth = styled.div`
  text-align: right;
  margin: 16px;

  & * {
    padding: 6px;
  }
`;

export default () => {
  return (
    <div className="container">
      <Auth>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </Auth>
      <Stub>Here will be a public page!</Stub>
    </div>
  );
};
