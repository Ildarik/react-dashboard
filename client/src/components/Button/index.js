import React from "react";
import styled from "styled-components";

const handleType = type => {
  switch (type) {
    case "primary":
      return "color: #fff; background-color: #1890ff;";
    case "danger":
      return "color: #fff; background-color: #ff4d4f;";
    default:
      return "color: rgba(0, 0, 0, 0.65); background-color: #fff;border: 1px solid rgb(217, 217, 217);";
  }
};
const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s 0s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  ${({ styles }) => styles};
  ${({ color }) => handleType(color)};
`;

export default ({ color, children, styles, onClick, ...rest }) => (
  <Button color={color} styles={styles} onClick={onClick} {...rest}>
    {children}
  </Button>
);
