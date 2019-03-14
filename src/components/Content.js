import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import data from "../constants/info";

const Container = styled.div`
  width: 75%;
  margin-left: 25%;
  border: 1px solid red;
  padding: 50px;
  overflow: scroll;
  right: 0;
  top: 0;
  padding: 50px;
`;

class Content extends Component {
  render() {
    return (
      <Container>
        {data.menu.map((menuItem, index) => {
          return (
            <Route
              path={menuItem.route}
              component={menuItem.component}
              key={index}
            />
          );
        })}
      </Container>
    );
  }
}

export default Content;
