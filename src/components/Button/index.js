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
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  margin-right: ${({ mr }) => mr.slice(2)}em;
  ${({ type }) => handleType(type)};
`;

export default ({ type, children, className }) => {
  return (
    <Button type={type} mr={className}>
      {children}
    </Button>
  );
};
