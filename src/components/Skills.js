import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
.main-title {
    line-height: 1;
    margin-bottom: 15px;
    color: #555;
    font-weight: 400;
  }
`;

const Info = styled.div`
  border-bottom: 0.1px solid grey;
  text-align: left;
  :not(first-child) {
    margin-top: 15px;
  }
`;

class Skills extends Component {
  render() {
    return <Container>
      <Info>
      <h1 className="main-title">SKILLS & OFFER</h1>
      <p>I am a <strong>full-stack web developer</strong> with over twelve years of experience.</p>

      <p>I have maintained, developed and launched multiple projects from scratch, carrying the development of
         its' back-end and front-end codebases.</p>
      <p>
      My current toolset includes Elixir Lang & Phoenix Framework, Ruby & Ruby on Rails, React, Redux,
       Angular, TypeScript, Docker and all the other various frameworks, libraries and technologies related to them.

      <p>Feel free to ask me any questions. I can help you in your project in all from the UI mockups, back-end and front-end 
        web development to fixing the design and installing & configuration of
         the application on staging/production enviroments.</p>

      <i>Call me a Swiss Army Knife in terms of web development.</i>
      </p>
      </Info>
      <Info>
      <h1 className="main-title">SKILLS & OFFER</h1>
      <p>I am a <strong>full-stack web developer</strong> with over twelve years of experience.</p>

      <p>I have maintained, developed and launched multiple projects from scratch, carrying the development of
         its' back-end and front-end codebases.</p>
      <p>
      My current toolset includes Elixir Lang & Phoenix Framework, Ruby & Ruby on Rails, React, Redux,
       Angular, TypeScript, Docker and all the other various frameworks, libraries and technologies related to them.

      <p>Feel free to ask me any questions. I can help you in your project in all from the UI mockups, back-end and front-end 
        web development to fixing the design and installing & configuration of
         the application on staging/production enviroments.</p>

      <i>Call me a Swiss Army Knife in terms of web development.</i>
      </p>
      </Info>
      <Info>
      <h1 className="main-title">SKILLS & OFFER</h1>
      <p>I am a <strong>full-stack web developer</strong> with over twelve years of experience.</p>

      <p>I have maintained, developed and launched multiple projects from scratch, carrying the development of
         its' back-end and front-end codebases.</p>
      <p>
      My current toolset includes Elixir Lang & Phoenix Framework, Ruby & Ruby on Rails, React, Redux,
       Angular, TypeScript, Docker and all the other various frameworks, libraries and technologies related to them.

      <p>Feel free to ask me any questions. I can help you in your project in all from the UI mockups, back-end and front-end 
        web development to fixing the design and installing & configuration of
         the application on staging/production enviroments.</p>

      <i>Call me a Swiss Army Knife in terms of web development.</i>
      </p>
      </Info>
    </Container>
  }
}

export default Skills;
