import React from 'react';
import Styles from '../Styles/сl_css_menu_item.module.css';
import styled from 'styled-components';
import  { Link } from "react-router-dom";

const StyledP = styled.p`
position:relative;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;

const StyledLink = styled.div`
display: inline;
transition: .5s ease;
color: white;
border-bottom-style: solid;
border-color: black;
border-width: 0.5px;
padding-bottom: 0.3vw;
font-family: 'Roboto Thin';
white-space: nowrap;
&:hover {
    border-color: white;
    text-decoration: none;
    color: white;
}
a:link {
    text-decoration: none;
  }
  
a:visited {
    text-decoration: none;
  }
  
a:hover {
    text-decoration: none;
  }
  
a:active {
    text-decoration: none;
  }
`;



function Menu_item(props) {
return  ( <StyledP><StyledLink><Link to={props.cont.path}>{props.cont.text}</Link></StyledLink></StyledP> );
};

export default Menu_item;
