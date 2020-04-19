import React from 'react';
import Styles from '../Styles/сl_css_menu_item.module.css';

function Menu_item(props) {
    let label = props.text;
return  ( <a className = {Styles.cl_css_menu_item + ' ' + Styles.top} href='#'>{label}</a> );
};

export default Menu_item;
