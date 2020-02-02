import React from "react";
import styled from "styled-components";
import closeIcon from "./close.svg";
import ClickOutside from "../ClickOutside";

const Modal = styled.div`
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  min-width: ${({ longerHeader }) => (longerHeader ? "420px" : "350px")};
  background-color: #fff;
  border: 0 solid rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 14px;
  right: 10px;
  width: 14px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
  }
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
`;

export default props => {
  const { isShowing, toggle, children, longerHeader } = props;

  return (
    <>
      {isShowing && (
        <>
          <Mask />
          <ClickOutside onClickOutside={toggle}>
            <Modal longerHeader={longerHeader}>
              <CloseIcon src={closeIcon} onClick={toggle} />
              {children}
            </Modal>
          </ClickOutside>
        </>
      )}
    </>
  );
};
