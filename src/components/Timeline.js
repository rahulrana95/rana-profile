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
    width: 12%;
    padding: 0px 15px 0px 0px;
    color: #999;
    text-align: right;
    font-style: italic;
    line-height: 30px;
    border-right: 1px solid #ddd;
    padding-top: 16px;
  }

  .time-text {
    margin-top: -15px;
  }

  .detail {
    margin-left: 17%;
    padding-bottom: 40px;
    border-bottom: 1px solid grey;
    width: 100%;
    :last-child {
      border-bottom: 0px;
    }
    margin-top: 30px;
  }

  li .time::after {
    content: "";
    width: 5px;
    height: 5px;
    top: 0px;
    right: -2px;
    position: absolute;
    background-color: red;
    margin-top: 30px;
  }

  li {
    margin: 0px;
    padding: 0px;
    display: flex;
    position: relative;
    marginn-bottom: 30px;
  }

  .detail:not(:first-child) {
    border-bottom: 1px solid #d8d4d4;
  }
`;

class Timeline extends Component {
  render() {
    const { detailStyle, time = "Now" } = this.props;

    return (
      <Container>
        <li>
          <div className="time">
            <time className="time-text">{time}</time>
          </div>
          <div className="detail" style={detailStyle}>
            {this.props.children}
          </div>
        </li>
      </Container>
    );
  }
}

export default Timeline;
