import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const Nav = styled.nav`
    ol {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      gap: 4.8rem;

      li {
        margin: 0 5px;
        position: relative;
        counter-increment: item 1;
        font-size: 1.5rem;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.5rem;

            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:before {
            content: "0" counter(item) ".";
            margin-right: 5px;
            color: rgb(85, 26, 139);
            font-weight: 600;
            font-size: 1.5rem;
            text-align: right;
          }
          //we use & to call the parent element
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
  `;

  return (
    <Nav>
      <div className="menuIcon">
        <ol className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ol>
      </div>
    </Nav>
  );
};

export default NavBar;
