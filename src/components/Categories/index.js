import React from "react";
import styled from "styled-components";
import mock from "../../mock";
import logo from "./close.svg";

const Category = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`;

const Wrapper = styled.aside`
  margin-top: 40px;
  margin-left: 40px;
`;

const ClearCategory = styled.img`
  width: 24px;
  margin-right: 5px;
`;

export default () => (
  <Wrapper>
    {mock.map(product => (
      <>
        <Category>
          <ClearCategory src={logo} /> {product.category}
        </Category>
      </>
    ))}
  </Wrapper>
);
