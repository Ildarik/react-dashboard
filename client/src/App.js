import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Auth>
      <Stub>Here will be a public page!</Stub>
    </div>
  );
};
