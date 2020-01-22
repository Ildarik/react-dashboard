import React from "react";
import styled from "styled-components";
import mock from "../../mock";
import closeIcon from "./close.svg";

const Category = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  color: blue;
  text-decoration: underline;
`;

const Wrapper = styled.div`
  margin-top: 40px;
  margin: 0 20px;
`;

const ClearCategory = styled.img`
  width: 24px;
  margin-right: 5px;
`;

export default () => (
  <Wrapper>
    {mock.map(product => (
      <Category>
        <ClearCategory src={closeIcon} /> {product.category}
      </Category>
    ))}
  </Wrapper>
);
