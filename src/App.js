import React from 'react';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import { Transition } from "react-spring";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #f1f1f2;
  }
`

const StyledApp = styled.div`
  max-width: 450px;
  margin: 0 auto;
  position: relative;
`;

type State = {
  viewState: string,
  chatScreenIsVisible: boolean,
  currentChatId: number,
  searchTerm: string,
  searchInputIsvisible: boolean,
  dropdownIsVisible: boolean
};

class App extends React.Component<null, State> {
  state = {
    viewState: "2",
    chatScreenIsVisible: false,
    currentChatId: 0,
    searchTerm: "",
    searchInputIsvisible: false,
    dropdownIsVisible: false
  };

  changeViewState = (event: SyntheticInputEvent<HTMLDataListElement>) => {
    const newState = event.target.dataset.nav;
    this.setState({ viewState: newState });
  };

  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <HeaderNav
          viewState={this.state.viewState}
          changeViewState={this.changeViewState}
        />
      </StyledApp>
    );
  }
}

export default App;