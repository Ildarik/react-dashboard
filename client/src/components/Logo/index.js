import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Logo = styled.img`
  height: 150px;
  margin-left: -20px;
`;

export default () => {
  return (
    <Link to="/">
      <Logo src={logo} />
    </Link>
  );
};
