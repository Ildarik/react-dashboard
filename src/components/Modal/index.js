import React, { useState, useEffect } from "react";
import styled from "styled-components";
import closeIcon from "./close.svg";
import ClickOutside from "../ClickOutside";
import Button from "../Button";

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
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 10px;
  width: 16px;
  margin-right: 5px;

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
`;

const ModalHeader = styled.div`
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
`;

const ModalBody = styled.div`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
`;

const ModalFooter = styled.div`
  margin-top: auto;
  padding: 10px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
`;

export default ({ showModal, modalHeader, modalBody }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShow(show => !show);
    }
  }, [showModal]);

  return (
    <>
      {show && (
        <>
          <Mask />
          <ClickOutside onClickOutside={() => setShow(!show)}>
            <Modal show={show}>
              <CloseIcon src={closeIcon} onClick={() => setShow(!show)} />
              <ModalHeader>{modalHeader}</ModalHeader>
              <ModalBody>{modalBody}</ModalBody>
              {/* TODO fix this - get from props */}
              <ModalFooter>
                <Button
                  styles="margin-right: 10px"
                  // TODO remove dublicate code
                  onClick={() => setShow(!show)}
                >
                  Cancel
                </Button>
                <Button type="primary">OK</Button>
              </ModalFooter>
            </Modal>
          </ClickOutside>
        </>
      )}
    </>
  );
};
