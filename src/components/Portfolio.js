import React, { Component } from "react";
import styled from "styled-components";
import {BlockTextEle} from "../widgets/styleComponents";
import Timeline from "./Timeline";

const Container = styled.div`
  width: 100%;
  text-align: left;

  .main-title {
    line-height: 1;
    margin-bottom: 15px;
    color: #555;
    font-weight: 400;
  }


  .red {
    color: #cb3e3e;
  }

  ul {
    padding-left: 20px;
  }
`;

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1 className="main-title">PORTFOLIO</h1>
          <p>
            See my works below. Unless stated otherwise in their description,
            all the Front-end parts were completely done by me.
          </p>
        </header>
        <ul>
          <Timeline time="18th March 2019 - Now">
            <BlockTextEle> 
              <strong>
               <i>Application Engineer - Flock (Directi), Bengaluru </i>
              </strong>
              </BlockTextEle>
              <BlockTextEle> 
                I am working on the <span className="red">Flockmail product</span> as a Frontend Engineer.
                We are building the next generation mail system for domain enterprises.
              </BlockTextEle>
          </Timeline>
          <Timeline time="4th Dec'18 - 15th Mar'19">
            <BlockTextEle> 
              <strong>
              <i>Software Engineer (SDE - I Frontend) - Rivigo, Gurgaon </i>
              </strong>
              </BlockTextEle>
              <BlockTextEle> 
                <ul>
                <li> Developing projects using Reactjs and Redux.</li>
                  <li> Develop the dashboard from scratch for the business people that is used by the 50+ people 
                    across teams to manage 1000+ people in Rivigo.</li>
                  <li> Worked on google maps APIs.</li>
                  <li> Working on Webpack4, Styled Components, Gatsby.</li>
                </ul>
              </BlockTextEle>
          </Timeline>
          <Timeline time="4th Dec'18 - 15th Mar'19">
            <BlockTextEle> 
              <strong>
              <i>Software Engineer (SDE - I Frontend) - HelpShift, Pune </i>
              </strong>
              </BlockTextEle>
              <BlockTextEle> 
                <ul>
                <li> Developing projects using Reactjs and Redux.</li>
                  <li> Develop the dashboard from scratch for the business people that is used by the 50+ people 
                    across teams to manage 1000+ people in Rivigo.</li>
                  <li> Worked on google maps APIs.</li>
                  <li> Working on Webpack4, Styled Components, Gatsby.</li>
                </ul>
              </BlockTextEle>
          </Timeline>
          <Timeline time="Dec'17 - Jan'18">
            <BlockTextEle> 
              <strong>
              <i>Software Engineer Intern - MindTickle, Pune </i>
              </strong>
              </BlockTextEle>
              <BlockTextEle> 
                <ul>
                <li> Developing projects using Reactjs and Redux.</li>
                  <li> Develop the dashboard from scratch for the business people that is used by the 50+ people 
                    across teams to manage 1000+ people in Rivigo.</li>
                  <li> Worked on google maps APIs.</li>
                  <li> Working on Webpack4, Styled Components, Gatsby.</li>
                </ul>
              </BlockTextEle>
          </Timeline>
          <Timeline time="May'17 - July'17">
            <BlockTextEle> 
              <strong>
              <i>Software Engineer Intern - Classplus (Formerly XPrep), Noida</i>
              </strong>
              </BlockTextEle>
              <BlockTextEle> 
                <ul>
                <li> Developing projects using Reactjs and Redux.</li>
                  <li> Develop the dashboard from scratch for the business people that is used by the 50+ people 
                    across teams to manage 1000+ people in Rivigo.</li>
                  <li> Worked on google maps APIs.</li>
                  <li> Working on Webpack4, Styled Components, Gatsby.</li>
                </ul>
              </BlockTextEle>
          </Timeline>
        </ul>
      </Container>
    );
  }
}

export default Portfolio;
