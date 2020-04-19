import React  from 'react';
import  Menu_item  from './Menu_item';
import Styles from '../Styles/cl_css_head_menu.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const label_array = ['о нас','каталог','корзины','контакты'];

function Head_menu() {
  return (
    <Container fluid = { true }>
      <Row style = {{width:'100%'}}>
        <Col lg = {2}>
        <Menu_item text = { label_array[0] }></Menu_item>
        </Col>
        <Col lg = {2}>
        <Menu_item text = { label_array[1] }></Menu_item>
        </Col>
        <Col lg = {2}>
        <Menu_item text = { label_array[2] }></Menu_item>
        </Col>
        <Col lg = {2}>
        <Menu_item text = { label_array[3] }></Menu_item>
        </Col>
      </Row>
  </Container> )
  };


// function Head_menu() {
// return (
// <ul className = {Styles.ul_head_menu}>
//   <li className = {Styles.li_head_menu}><Menu_item text = { label_array[0] } /></li>
//   <li className = {Styles.li_head_menu}><Menu_item text = { label_array[1] } /></li>
//   <li className = {Styles.li_head_menu}><Menu_item text = { label_array[2] } /></li>
//   <li className = {Styles.li_head_menu}><Menu_item text = { label_array[3] } /></li>
// </ul> );
// };

export default Head_menu;




