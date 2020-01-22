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
  margin-left: 24px;
`;

const Cell = styled.div`
  padding: 12px;
  width: ${props => (props.small ? "20px" : "80px")};
`;

const Header = styled.div`
  display: flex;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
`;

export default () => {
  return (
    <>
      <DataGrid>
        <Categories />
        <Table>
          <Header>
            <Cell small>ID</Cell>
            <Cell>Название</Cell>
            <Cell>Закупка</Cell>
            <Cell>Продажа</Cell>
          </Header>

          {mock.map(product => {
            return (
              <Row>
                <Cell small>{product.id}</Cell>
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
