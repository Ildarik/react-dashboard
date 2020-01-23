import React from "react";
import styled from "styled-components";
import closeIcon from "./close.svg";
import ClickOutside from "../ClickOutside";

const Modal = styled.div`
  width: 400px;
  height: 300px;
  background: white;
  border: 1px solid orange;
  border-radius: 5px;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  text-align: center;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  margin-right: 5px;
`;

export default ({ show, children }) => {
  return (
    <ClickOutside onClickOutside={() => console.log("Hello from outside!")}>
      <Modal show={show}>
        <CloseIcon src={closeIcon} />
        {children}
      </Modal>
    </ClickOutside>
  );
};
