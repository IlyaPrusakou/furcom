import React from 'react';
import Styles from '../Styles/сl_css_menu_item.module.css';
import styled from 'styled-components';

const StyledP = styled.p`
position:relative;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;

function Menu_item(props) {
    let label = props.text;
return  ( <StyledP><a  href='#'>{label}</a></StyledP> );
};

export default Menu_item;
