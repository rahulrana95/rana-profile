import React, { Component } from "react";
import styled from "styled-components";
import Timeline from "./Timeline";
import { BlockTextEle } from "../widgets/styleComponents";

const Container = styled.div`
  .detail:not(:first-child) {
    margin-top: 30px;
  }

  h3 {
    margin-top: 0px;
  }
`;

class MyTalks extends Component {
  render() {
    return <Container>
      <Timeline time="now" detailStyle={{marginTop: "0px"}}>
        <BlockTextEle>
          <h3>How to handle asynchronous actions in Redux</h3>
        </BlockTextEle>
      </Timeline>
      <Timeline time="now">
        <BlockTextEle>
          ahdadhsa aksd a dad asa dsbasra dva ar 
        </BlockTextEle>
      </Timeline>
      <Timeline time="now">
        <BlockTextEle>
          ahdadhsa aksd a dad asa dsbasra dva ar 
        </BlockTextEle>
      </Timeline>
    </Container>;
  }
}

export default MyTalks;
