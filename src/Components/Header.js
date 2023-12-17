import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import Icon from "../Icon/Icon";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Icon />
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};
//in here the mainheader work as header
const MainHeader = styled.header`
  padding: 0 4rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Header;
