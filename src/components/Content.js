import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import data from "../constants/info";

const Container = styled.div`
  width: 75%;
  margin-left: 25%;
  padding: 50px;
  overflow: scroll;
  background-color: #f3f3f3;
  right: 0;
  top: 0;
  padding: 50px;
  background-color: white;
`;

class Content extends Component {
  render() {
    return (
      <Container>
        {data.menu.map((menuItem, index) => {
          const Props = {};
          if (menuItem.exact) {
            Props.exact = true;
          }
          return (
            <Route
              path={menuItem.route}
              component={menuItem.component}
              key={index}
              {...Props}
            />
          );
        })}
      </Container>
    );
  }
}

export default Content;
