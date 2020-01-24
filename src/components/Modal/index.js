import React from "react";
import styled from "styled-components";
import closeIcon from "./close.svg";
import ClickOutside from "../ClickOutside";

const Modal = styled.div`
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  min-width: 350px;
  min-height: 250px;
  background-color: #fff;
  border: 0 solid rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 10px;
  width: 16px;
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
