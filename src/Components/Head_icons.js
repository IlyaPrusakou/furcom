import React  from 'react';
import Icon from './Icon';
import Styles from '../Styles/cl_css_head_icons.module.css';




function Head_icons(props){
    return( 
    <div className = {Styles.cl_css_head_icons}>
        <Icon type = 'search'/>
        <Icon type = 'person'/>
        <Icon type = 'cart'/>
        <Icon type = 'home'/>
    </div> );
}

export default Head_icons;

