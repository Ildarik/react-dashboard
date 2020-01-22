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
  padding: 12px;
  width: ${props => (props.small ? "40px" : "120px")};
  vertical-align: middle;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  background-color: rgb(250, 250, 250);
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
