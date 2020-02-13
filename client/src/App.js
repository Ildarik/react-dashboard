import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Checkbox } from "antd";
import { getProducts, getCategories } from "./actions";

const Auth = styled.div`
  text-align: right;
  margin: 16px;

  & * {
    padding: 6px;
  }
`;

// TODO think about where is a better place to get products

export default () => {
  const { products, categories } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = () => {
      dispatch(getProducts());
      dispatch(getCategories());
    };
    fetchAPI();
  }, [dispatch]);

  const filters = categories.map(category => category.name);
  return (
    <div className="container">
      <Auth>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Auth>
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Checkbox.Group options={filters} defaultValue={["Man"]} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {/* TODO add sceleton for cards */}
        {products.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product._id}>
            <Card hoverable style={{ width: 200 }}>
              <Card.Meta
                title={product.name}
                description={`${product.sell}$`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
