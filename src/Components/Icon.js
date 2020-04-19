import React  from 'react';
import Styles from '../Styles/cl_css_icon_btn.module.css';
import { Search, Person } from 'react-bootstrap-icons';

const person_path = 'http://localhost:8080/person6.svg';
const search_path = 'http://localhost:8080/search.svg';
const cart_path = 'http://localhost:8080/cart.svg';
const home_path = 'http://localhost:8080/home.svg';

function Icon(props){
    if (props.type === 'search') {
        return ( <div className = {Styles.cl_css_icon_btn}><a><img className = { Styles.icon_size } src = { search_path }></img></a></div> ); 
    } else if (props.type === 'person') {
        return ( <div className = {Styles.cl_css_icon_btn}><a><img className = { Styles.icon_size } src = { person_path }></img></a></div> ); 
    }  else if (props.type === 'cart') { 
        return ( <div className = {Styles.cl_css_icon_btn}><a><img className = { Styles.icon_size } src = { cart_path }></img></a></div> );
    } else if (props.type === 'home') {
        return ( <div className = {Styles.cl_css_icon_btn}><a><img className = { Styles.icon_size } src = { home_path }></img></a></div> );
    }
}

export default Icon;
