import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import data from "../constants/info";
import colors from "../constants/colors";

const Container = styled.div`
  color: ${colors.primaryText};
  overflow: scroll;
  position: relative;
  width: 25%;
  border: 1px solid green;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-image: url(http://www.pauldowe.com/wp-content/uploads/2018/06/redgate-beach-sunset-2a.jpg);
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  z-index: -111;

  .child {
    position: relative;
    z-index: 100;
    height: 100%;
  }

  .child::before {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: red;
    opacity: 0.6;
    z-index: -10;
  }

  .activeLink {
    color: white !important;
    width: 100%;
    :after {
      content: " >";
      right: 0;
    }
  }

  .name {
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 10px 0px;
  }

  .designation {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .ul {
    list-style: none;
    text-align: left;
  }
  .ul li {
    margin: 20px 0px 0px 0px;
    position: relative;
  }

  .ul li::hover {
    cursor: pointer;
    color: red !important;
  }

  .activeLink:after {
    content: " ";
    display: block;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-right: 8px solid #fff;
    bottom: 6px;
    left: auto;
    right: 0;
    position: absolute;
  }
`;

const Img = styled.img`
  width: ${props => (props.width ? props.width : "300px")};
  height: ${props => (props.height ? props.height : "auto")};
  border-radius: ${props => (props.radius ? props.radius : "0px")};
`;

const Avatar = props => {
  return <Img src={props.img} radius="30px" />;
};

const Header = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <Avatar
          img={
            "https://cdn-images-1.medium.com/max/1200/1*YSsYXHSaMWKEebr1CGowOw.jpeg"
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "25px"
        }}
      >
        <h1 className="name">{data.profile.name}</h1>
        <h2 className="designation">{data.profile.designation}</h2>
      </div>
    </div>
  );
};

class SideMenu extends Component {
  render() {
    console.log(this.props.location);
    return (
      <Container>
        <div className="child">
          <div>
            <Header />
            <ul
              className="ul"
              style={{
                listStyle: "none",
                textAlign: "left",
                color: colors.primaryText
              }}
            >
              {data.menu.map((menuItem, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      activeClassName="activeLink"
                      onClick={() => console.log("Clicked route")}
                      style={{
                        textDecoration: "none",
                        color: "rgba(255,255,255,.6)"
                      }}
                      to={menuItem.route}
                    >
                      {menuItem.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <ul className="ul">
              <li>Linkedin</li>
              <li>Linkedin</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default SideMenu;
