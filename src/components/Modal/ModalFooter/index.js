import React from "react";
import Button from "../../Button";
import styled from "styled-components";

const Styled = styled.div`
  margin-top: auto;
  padding: 12px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
`;

/* For now 2 type of modal footer - with button Save or Ok/Cancel */

export default ({ modalFooter }) => (
  <Styled>
    {modalFooter === "OkCancel" ? (
      <>
        <Button type="primary" styles="margin-right: 10px">
          Ok
        </Button>
        <Button>Cancel</Button>
      </>
    ) : (
      <Button type="primary">Save</Button>
    )}
  </Styled>
);
