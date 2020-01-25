import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Categories from "../Categories";
import mock from "../../mock";

const DataGrid = styled.div`
  display: flex;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
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
  return (
    <>
      <DataGrid>
        <Categories />
        <Table>
          <Header>
            <Cell small>ID</Cell>
            <Cell>Name</Cell>
            <Cell>Purchase</Cell>
            <Cell>Sale</Cell>
          </Header>

          {mock.map(product => (
            <Row key={product.id}>
              <Cell small>{product.id}</Cell>
              <Cell>{product.name}</Cell>
              <Cell>{product.price}</Cell>
              <Cell>{product.sell}</Cell>
              <Cell>
                <Button type="danger">Remove</Button>
              </Cell>
              <Cell>
                <Button>Edit</Button>
              </Cell>
            </Row>
          ))}
        </Table>
      </DataGrid>
    </>
  );
};
