import React from "react";
import styled from "styled-components";

const StyledHeaderNav = styled.nav`
  background: green;
  position: sticky;
  background-color: #075e54;
  top: 0;
  z-index: 1;
  font-size: 0.9em;
  font-weight: 600;
  height: 45px;
  display: flex;
  letter-spacing: 0.5px;
  justify-content: space-between;
  color: white;
  a {
    flex-grow: 2
    padding-top: 15px;
  }
  a:first-child {
    flex-grow: 1
    padding-top: 10px;
  }
`;

const StyledNavItem = styled.a`
  text-align: center;
  transition: background-color 1.5s;
  color: ${props => (props.viewState === props.current ? "white" : "#83afaa")};
  border-bottom: ${props =>
    props.viewState === props.current ? "3px solid white" : "none"};
  &:active {
    background-color: lightgray;
    transition: background-color 0.5s;
    border-bottom: 3px solid white;
  }

`;

type Props = {
  changeViewState: Function,
  viewState: string
};

const HeaderNav = ({ changeViewState, viewState }: Props) => {
  return (
    <StyledHeaderNav>
      <StyledNavItem
        data-nav="1"
        onClick={changeViewState}
        viewState={viewState}
        current="1"
      >
        CAM
      </StyledNavItem>
      <StyledNavItem
        data-nav="2"
        onClick={changeViewState}
        viewState={viewState}
        current="2"
      >
        CHATS
      </StyledNavItem>
      <StyledNavItem
        data-nav="3"
        onClick={changeViewState}
        viewState={viewState}
        current="3"
      >
        STATUS
      </StyledNavItem>
      <StyledNavItem
        data-nav="4"
        onClick={changeViewState}
        viewState={viewState}
        current="4"
      >
        CALLS
      </StyledNavItem>
    </StyledHeaderNav>
  );
};

export default HeaderNav;
