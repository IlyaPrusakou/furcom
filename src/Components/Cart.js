import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Flow from './Flow';
import CartTable from './CartTable';
import styled from 'styled-components';

const CartLabel = styled.div`
    font-family: 'Roboto Thin';
    font-size: 1.5rem;
    color: black;
`;


function Cart(props){
    return(
        <div>
            <BreadCrumbs></BreadCrumbs>
            <Flow></Flow>
            <CartLabel>Корзина покупателя</CartLabel>
            <CartTable></CartTable>
            <div>CartButtonGroup</div>
        </div>
    );
}


export default Cart;

