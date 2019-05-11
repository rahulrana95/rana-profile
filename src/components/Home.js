import React, { Component } from "react";
import styled from "styled-components";
import bg from "../images/backlit.jpg";

const Container = styled.div`
  border: 1px solid red;
  overflow: scroll;
  right: 0;
  top: 0;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 25%;
  bottom: 0;
  right: 0;
  background-image: url(${bg});
  text-align: left;
  padding-left: 100px;
  padding-top: 160px;
  color: #fff;
  &:before {
    content: "";
    position: fixed;
    right: 0;
    top: 0;
    position: fixed;
    top: 0;
    left: 25%;
    bottom: 0;
    background-color: #1e1e1e;
    opacity: 0.5;
    z-index: -1;
  }

  .line-1 {
    font-size: 4em;
    font-weight: 500;
  }

  .line-2 {
    font-size: 3em;
    font-weight: 300;
    text-transform: none;
  }
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <div className="line-1">Hi, I'm Rahul,</div>
        <h2 className="line-2">
          a developer with specilization in <strong>Frontend deveopment</strong>
          .
          <br />I like making systems efficient.
        </h2>
      </Container>
    );
  }
}

export default Home;
