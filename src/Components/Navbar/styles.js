import styled from "styled-components";

export const NavbarMenu = styled.div`
  background-color: #0a0a0a;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavMenu = styled.nav`
  background-color: #0a0a0a;
  width: 16vw;
  min-width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  &.active {
    left: 0;
    transition: 350ms;
  }

  .nav-toggle {
    background-color: #0a0a0a;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const NavText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
      background-color: #b40421;
    }
  }
`;
