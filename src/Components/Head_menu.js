import React  from 'react';
import  Menu_item  from './Menu_item';
import Styles from '../Styles/cl_css_head_menu.module.css';

const label_array = ['О нас','Каталог','Корзины','Контакты'];

function Head_menu() {
return (
<ul className = {Styles.ul_head_menu}>
  <li className = {Styles.li_head_menu}><Menu_item text = { label_array[0] } /></li>
  <li className = {Styles.li_head_menu}><Menu_item text = { label_array[1] } /></li>
  <li className = {Styles.li_head_menu}><Menu_item text = { label_array[2] } /></li>
  <li className = {Styles.li_head_menu}><Menu_item text = { label_array[3] } /></li>
</ul> );
};

export default Head_menu;




