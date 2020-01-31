import React from "react";
import styled, { css } from "styled-components";
import closeIcon from "./close.svg";
import RemoveCategory from "../Modals/RemoveCategory";
import Modal from "../Modal";
import Toggler from "../Toggler";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory, setActiveNoCategory } from "../../actions";

const Category = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  cursor: pointer;
  padding: 4px 0;
`;

const Filter = styled.span`
  color: blue;
  text-decoration: underline;
  ${({ active }) =>
    active &&
    css`
      cursor: auto;
      text-decoration: none;
      color: #444;
    `};
  ${({ noRemoveIcon }) =>
    noRemoveIcon &&
    css`
      margin-left: 24px;
    `};
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
  const { categories, activeCategory } = useSelector(state => state);

  const dispatch = useDispatch();

  const noCategory = [null, undefined, "No category"];

  return (
    <Wrapper>
      {categories
        .filter(category => !noCategory.includes(category))
        .map((category, index) => (
          <Category key={index}>
            <Toggler
              renderTrigger={props => (
                <ClearCategory src={closeIcon} {...props} />
              )}
              renderContent={props => (
                <Modal {...props}>
                  <RemoveCategory category={category} {...props} />
                </Modal>
              )}
            />
            <Filter
              active={category === activeCategory}
              onClick={() => dispatch(setActiveCategory(category))}
            >
              {category}
            </Filter>
          </Category>
        ))}

      <Filter
        noRemoveIcon
        active={activeCategory === "No category"}
        onClick={() => dispatch(setActiveNoCategory())}
      >
        No Category
      </Filter>
    </Wrapper>
  );
};
