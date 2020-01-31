import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Categories from "../Categories";
import RemoveProduct from "../Modals/RemoveProduct";
import EditProduct from "../Modals/EditProduct";
import Toggler from "../Toggler";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { NO_CATEGORY } from "../../constants";

const Wrapper = styled.div`
  display: flex;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ noCategories }) => (noCategories ? "140px" : "40px")};
`;

const Cell = styled.div`
  padding: 6px;
  width: ${props => (props.small ? "40px" : "120px")};
  vertical-align: middle;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  background-color: rgb(250, 250, 250);
  padding: 6px 0;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  line-height: 30px;
  transition: all 0.3s 0s;

  &:hover {
    background: rgb(230, 247, 255);
  }
`;

export default () => {
  const { products, activeCategory, categories } = useSelector(state => state);

  const noCategory = [null, undefined, NO_CATEGORY];

  const noCategoryProducts = products.filter(product =>
    noCategory.includes(product.category)
  );

  const filteredProducts = !activeCategory
    ? products
    : activeCategory === NO_CATEGORY
    ? noCategoryProducts
    : products.filter(product => product.category === activeCategory);

  const noCategories =
    categories.length === noCategory.length &&
    categories.every(value => noCategory.includes(value));

  return (
    <>
      <Wrapper>
        <Categories />
        <Table noCategories={noCategories}>
          <Header>
            <Cell small>ID</Cell>
            <Cell>Name</Cell>
            <Cell>Purchase</Cell>
            <Cell>Sale</Cell>
          </Header>

          {filteredProducts.map(product => (
            <Row key={product.id}>
              <Cell small>{product.id}</Cell>
              <Cell>{product.name}</Cell>
              <Cell>{product.price}</Cell>
              <Cell>{product.sell}</Cell>
              <Cell>
                <Toggler
                  renderTrigger={props => (
                    <Button color="danger" {...props}>
                      Remove
                    </Button>
                  )}
                  renderContent={props => (
                    <Modal {...props}>
                      <RemoveProduct productId={product.id} {...props} />
                    </Modal>
                  )}
                />
              </Cell>
              <Cell>
                <Toggler
                  renderTrigger={props => <Button {...props}>Edit</Button>}
                  renderContent={props => (
                    <Modal {...props}>
                      <EditProduct product={product} {...props} />
                    </Modal>
                  )}
                />
              </Cell>
            </Row>
          ))}
        </Table>
      </Wrapper>
    </>
  );
};
