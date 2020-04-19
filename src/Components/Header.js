import React  from 'react';
import  Head_menu  from './Head_menu';
import  Head_icons from './Head_icons';
import Styles from '../Styles/cl_css_header.module.css'




function Header(){
    return ( 
    <div className = {Styles.header}>
        <div className = {Styles.right_buffer}></div>
        <Head_menu />
        <Head_icons/>
        <div className = {Styles.right_buffer}></div>
    </div> );
}

export default Header;

