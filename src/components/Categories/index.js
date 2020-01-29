import React from "react";
import styled from "styled-components";
import closeIcon from "./close.svg";
import removeCategory from "../Modals/removeCategory";
import Modal from "../Modal";
import Toggler from "../Toggler";
import { useSelector } from "react-redux";

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

export default () => {
  const products = useSelector(state => state);

  return (
   <Wrapper>
    {products.map((product, index) => (
      <Category key={index}>
        <Toggler
          renderTrigger={props => <ClearCategory src={closeIcon} {...props} />}
          renderContent={props => <Modal {...removeCategory} {...props} />}
        />
        {product.category}
      </Category>
    ))}
  </Wrapper>
  );
};
