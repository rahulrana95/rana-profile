import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: left;

  .time {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10%;
    padding: 0px 15px 0px 0px;
    color: #999;
    text-align: right;
    font-style: italic;
    line-height: 30px;
    border-right: 1px solid #ddd;
  }

  .time-text {
    margin-top: -15px;
  }

  .detail {
    margin-left: 15%;
    padding-bottom: 40px;
    border-bottom: 1px solid grey;

    :last-child {
      border-bottom: 0px;
    }
  }

  ul li .time::after {
    content: "";
    width: 5px;
    height: 5px;
    top: 0px;
    right: -2px;
    position: absolute;
    background-color: red;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  ul li {
    margin: 0px;
    padding: 0px;
    display: flex;
    position: relative;
  }
`;

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <header>
          <span>Portfolio</span>
          <p>
            See my works below. Unless stated otherwise in their description,
            all their back-end and front-end parts were completely done by me.
          </p>
        </header>
        <ul>
          <li>
            <div className="time">
              <time className="time-text">Now</time>
            </div>
            <div className="detail">
              Busy until March 2019. From then on, I'll be open to co-operation
              on new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team? Busy until March 2019. From then on,
              I'll be open to co-operation on new/existing projects. Looking for
              a CTO or a full-stack dev willing to join your team? Busy until
              March 2019. From then on, I'll be open to co-operation on
              new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team? Busy until March 2019. From then on,
              I'll be open to co-operation on new/existing projects. Looking for
              a CTO or a full-stack dev willing to join your team? Busy until
              March 2019. From then on, I'll be open to co-operation on
              new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team?
            </div>
          </li>
          <li>
            <div className="time">
              <time className="time-text">Now</time>
            </div>
            <div className="detail">
              Busy until March 2019. From then on, I'll be open to co-operation
              on new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team? Busy until March 2019. From then on,
              I'll be open to co-operation on new/existing projects. Looking for
              a CTO or a full-stack dev willing to join your team? Busy until
              March 2019. From then on, I'll be open to co-operation on
              new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team? Busy until March 2019. From then on,
              I'll be open to co-operation on new/existing projects. Looking for
              a CTO or a full-stack dev willing to join your team? Busy until
              March 2019. From then on, I'll be open to co-operation on
              new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team?
            </div>
          </li>
          <li>
            <div className="time">
              <time>Now</time>
            </div>
            <div className="detail">
              Busy until March 2019. From then on, I'll be open to co-operation
              on new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team? Busy until March 2019. From then on,
              I'll be open to co-operation on new/existing projects. Looking for
              a CTO or a full-stack dev willing to join your team? Busy until
              March 2019. From then on, I'll be open to co-operation on
              new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team? Busy until March 2019. From then on,
              I'll be open to co-operation on new/existing projects. Looking for
              a CTO or a full-stack dev willing to join your team? Busy until
              March 2019. From then on, I'll be open to co-operation on
              new/existing projects. Looking for a CTO or a full-stack dev
              willing to join your team?
            </div>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Portfolio;
