import React, { Component } from "react";
import styled from "styled-components";
import SideMenu from "./components/SideMenu";
import Content from "./components/Content";
import "./App.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  h1,
  h2 {
    margin: 0px;
  }
  
  font-family: 'Roboto', sans-serif;

  background-color: #ece6e6;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <SideMenu />
        <Content />
      </Container>
    );
  }
}

export default App;
