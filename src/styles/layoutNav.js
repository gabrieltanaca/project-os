import styled from "styled-components";

export const LayoutNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  transition: 850ms;

  &.active {
    margin-left: 14vw;
    width: 86vw !important;
  }

  &.desative {  
    margin-left: 0 !important;
    width: 100vw !important;
  }
`;
