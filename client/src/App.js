import React from "react";
import styled from "styled-components";

const Stub = styled.div`
  line-height: 90vh;
  text-align: center;
  font-size: 24px;
`;

export default () => {
  return (
    <div className="container">
      <Stub>Here will be a public page!</Stub>
    </div>
  );
};
