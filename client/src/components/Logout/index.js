import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleAuthentication } from "../../actions";

const Logout = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 16px;

  & * {
    padding: 6px;
  }
`;

export default () => {
  const dispatch = useDispatch();

  return (
    <Logout>
      <a href="/" onClick={() => dispatch(toggleAuthentication())}>
        Logout
      </a>
    </Logout>
  );
};
