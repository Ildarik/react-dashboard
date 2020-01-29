import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const modalBody = <Styled>Do you want to remove product id = ?</Styled>;

export default {
  modalHeader: "Remove product",
  modalBody: modalBody,
  modalFooter: "OkCancel"
};
