import React from "react";
import styled from "styled-components";
import closeIcon from "./close.svg";
import removeCategory from "../Modals/removeCategory";
import Modal from "../Modal";
import Toggler from "../Toggler";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../../actions";

const Category = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
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

const Filter = styled.span`
  color: blue;
  text-decoration: underline;
`;

export default () => {
  const categories = useSelector(state => state.categories);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {categories.map((category, index) => (
        <Category key={index}>
          <Toggler
            renderTrigger={props => (
              <ClearCategory src={closeIcon} {...props} />
            )}
            renderContent={props => <Modal {...removeCategory} {...props} />}
          />
          <Filter onClick={() => dispatch(setVisibilityFilter(category))}>
            {category}
          </Filter>
        </Category>
      ))}
    </Wrapper>
  );
};
