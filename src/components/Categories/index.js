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
  cursor: pointer;
  padding: 4px 0;
`;

const Wrapper = styled.div`
  margin-top: 40px;
  margin: 0 20px;
  padding-top: 36px;
`;

const ClearCategory = styled.img`
  width: 18px;
  margin-right: 6px;
`;

export default () => (
  <Wrapper>
    {mock.map((product, index) => (
      <Category key={index}>
        <ClearCategory src={closeIcon} /> {product.category}
      </Category>
    ))}
  </Wrapper>
);
