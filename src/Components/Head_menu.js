import React  from 'react';
import  Menu_item  from './Menu_item';
import Styles from '../Styles/cl_css_head_menu.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const label_array = [{text:'о нас', path:'about'},{text:'каталог', path:'cat'},{text:'корзина', path:'cart'},{text:'контакты', path:'contact'}];

function Head_menu() {
  return (
    <Container>
      <Row style = {{width:'100%', flexWrap: 'nowrap'}}>
        <Col lg = {2}>
        <Menu_item cont = { label_array[0] }></Menu_item>
        </Col>
        <Col lg = {2}>
        <Menu_item cont = { label_array[1] }></Menu_item>
        </Col>
        <Col lg = {2}>
        <Menu_item cont = { label_array[2] }></Menu_item>
        </Col>
        <Col lg = {2}>
        <Menu_item cont = { label_array[3] }></Menu_item>
        </Col>
      </Row>
  </Container> )
  };

export default Head_menu;




