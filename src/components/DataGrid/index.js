import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Categories from "../Categories"

const mock = [
  {
    id: "1",
    name: "Товар 1",
    category: "Категория 1",
    price: "2200",
    sell: "2500"
  },
  {
    id: "2",
    name: "Товар 2",
    category: "Категория 2",
    price: "2200",
    sell: "2500"
  },
  {
    id: "3",
    name: "Товар 3",
    category: "Категория 3",
    price: "2200",
    sell: "2500"
  },
  {
    id: "4",
    name: "Товар 1",
    category: "Без категории",
    price: "2200",
    sell: "2500"
  }
];

const DataGrid = styled.div`
  display: flex;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

const Cell = styled.div`
  margin: 0.5em 1em;
`;

const Header = styled.div`
  display: flex;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  margin: 1em 0;
`;

export default () => {
  return (
    <>
      <DataGrid>
        <Categories />
        <Table>
          <Header>
            <Cell>ID</Cell>
            <Cell>Название</Cell>
            <Cell>Закупка</Cell>
            <Cell>Продажа</Cell>
          </Header>

          {mock.map(product => {
            return (
              <Row>
                <Cell>{product.id}</Cell>
                <Cell>{product.name}</Cell>
                <Cell>{product.price}</Cell>
                <Cell>{product.sell}</Cell>
                <Cell>
                  <Button type="danger">Удалить</Button>
                </Cell>
                <Cell>
                  <Button>Изменить</Button>
                </Cell>
              </Row>
            );
          })}
        </Table>
      </DataGrid>
    </>
  );
};
