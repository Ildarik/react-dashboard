import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Checkbox } from "antd";
import { getProducts, getCategories } from "./actions";
import { setActiveCategory, setActiveNoCategory } from "./actions";
import { NO_CATEGORY } from "./constants";

const Auth = styled.div`
  text-align: right;
  margin: 16px;

  & * {
    padding: 6px;
  }
`;

const Filter = styled.span`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 12px;
  ${({ active }) =>
    active &&
    css`
      cursor: auto;
      text-decoration: none;
      color: #444;
    `};
`;

const NoItems = styled.div`
  margin: 50px;
`;

// TODO think about where is a better place to get products

export default () => {
  const { products, categories, activeCategory } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = () => {
      dispatch(getProducts());
      dispatch(getCategories());
    };
    fetchAPI();
  }, [dispatch]);

  const noCategory = [null, undefined, NO_CATEGORY];

  const noCategoryProducts = products.filter(product =>
    noCategory.includes(product.category)
  );

  const filteredProducts = !activeCategory
    ? products
    : activeCategory === NO_CATEGORY
    ? noCategoryProducts
    : products.filter(product => product.category === activeCategory);

  const noCategories = categories.every(value => noCategory.includes(value));

  const noItemsToShow = !filteredProducts.length;

  return (
    <div className="container">
      <Auth>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Auth>
      <Row gutter={[16, 16]} justify="center">
        <Col>
          {/* TODO DRY this - move into separate component */}
          {categories
            .filter(category => !noCategory.includes(category.name))
            .map((category, index) => (
              <Filter
                key={index}
                active={category._id === activeCategory}
                onClick={() => dispatch(setActiveCategory(category._id))}
              >
                {category.name}
              </Filter>
            ))}

          {!categories.every(category =>
            noCategory.includes(category.name)
          ) && (
            <Filter
              noRemoveIcon
              active={activeCategory === NO_CATEGORY}
              onClick={() => dispatch(setActiveNoCategory())}
            >
              {NO_CATEGORY}
            </Filter>
          )}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {/* TODO add sceleton for cards */}

        {/* TODO center cards on small screen */}
        {noItemsToShow ? (
          <NoItems>No items</NoItems>
        ) : (
          filteredProducts.map(product => (
            <Col xs={24} sm={12} md={8} lg={6} key={product._id}>
              <Card hoverable style={{ width: 200, background: "lightblue" }}>
                <Card.Meta
                  title={product.name}
                  description={`${product.sell}$`}
                />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};
