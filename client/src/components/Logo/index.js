import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.img`
  height: 150px;
  margin-left: -20px;
`;

export default () => {
  return <Logo src={logo} />;
};
