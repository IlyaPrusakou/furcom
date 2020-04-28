import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px 70px 10px 70px;
`;
const ButtonBase = styled.input`
    background-color: black;
    color: white;
    margin: auto;
    border: none;
    font-family: 'Roboto Thin';
`;
const ConfirmButton = styled(ButtonBase).attrs({type:'button', value:'Оформить заказ'})`
    width: 45%;
`;
const DeleteButton = styled(ButtonBase).attrs({type:'button', value:'Удалить все'})`
    width: 20%;
    background-color: red;
`;
const ChangeButton = styled(ButtonBase).attrs({type:'button', value:'Изменить все'})`
    width: 20%;
`;


const ConfButton = styled(Link)`
    text-align: center;
    width: 45%;
    background-color: black;
    color: white;
    margin: auto;
    border: none;
    font-family: 'Roboto Thin';
`;


function CartButtonGroup(props) {
    return(
        <Container>
            <ConfButton to='/conf'>Оформить заказ</ConfButton>
            <DeleteButton></DeleteButton>
            <ChangeButton></ChangeButton>
        </Container>
    );
}


export default CartButtonGroup;





