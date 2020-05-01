import React from 'react';
import Styles from '../Styles/сl_css_menu_item.module.css';
import styled from 'styled-components';
import  { Link } from "react-router-dom";

const StyledP = styled.div`

position:relative;
top:50%;
left:50%;
transform: translate(-50%, -50%);



color: white;

font-family: 'Roboto Thin';
white-space: nowrap;

& a {
  transition: .5s ease;
  padding-bottom: 0.3vw;
}

& a:link {
    text-decoration: none;
  }
  
& a:visited {
    text-decoration: none;
  }
  
& a:hover {
    text-decoration: none;
    border-bottom-style: solid;
    border-color: white;
    border-width: 0.5px;
  }
  
& a:active {
    text-decoration: none;
  }
`;

function Menu_item(props) {
return  ( <StyledP><Link to={props.cont.path} style = {{color:'white'}}>{props.cont.text}</Link></StyledP> );
};

export default Menu_item;
