import React from "react";
import styled, { css } from "styled-components";
import closeIcon from "./close.svg";
import RemoveCategory from "../Modals/RemoveCategory";
import Modal from "../Modal";
import Toggler from "../Toggler";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory, setActiveNoCategory } from "../../actions";
import { NO_CATEGORY } from "../../constants";

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
  cursor: pointer;
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

  const noCategory = [null, undefined, NO_CATEGORY];

  return (
    <Wrapper>
      {categories
        .filter(category => !noCategory.includes(category.name))
        .map((category, index) => (
          <Category key={index}>
            <Toggler
              renderTrigger={props => (
                <ClearCategory src={closeIcon} {...props} />
              )}
              renderContent={props => (
                <Modal {...props} longerHeader>
                  <RemoveCategory category={category} {...props} />
                </Modal>
              )}
            />
            <Filter
              active={category._id === activeCategory}
              onClick={() => dispatch(setActiveCategory(category._id))}
            >
              {category.name}
            </Filter>
          </Category>
        ))}
      {!categories.every(category => noCategory.includes(category.name)) && (
        <Filter
          noRemoveIcon
          active={activeCategory === NO_CATEGORY}
          onClick={() => dispatch(setActiveNoCategory())}
        >
          {NO_CATEGORY}
        </Filter>
      )}
    </Wrapper>
  );
};
