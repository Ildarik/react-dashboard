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
