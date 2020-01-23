import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 5px;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  text-align: center;
`;

// onclick outside feature

export default ({ show, children }) => {
  return <Modal show={show}>{children}</Modal>;
};
