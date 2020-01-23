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
`;

// onclick outside feature

export default ({show}) => {
  return <Modal show={show} />;
};
