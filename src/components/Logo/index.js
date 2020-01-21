import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.img`
  height: 20vmin;
`;

export default () => {
  return <Logo src={logo} />;
};
