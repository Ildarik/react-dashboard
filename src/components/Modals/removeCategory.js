import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const modalBody = <Styled>All products will be marked as "No category"</Styled>;

export default {
  modalHeader: "Do you want to remove category?",
  modalBody: modalBody,
  modalFooter: "OkCancel"
};
