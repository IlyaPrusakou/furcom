import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Flow from './Flow';
import CartTable from './CartTable';
import CartButtonGroup from "./CartButtonGroup";
import styled from 'styled-components';

const CartLabel = styled.div`
    font-family: 'Roboto Thin';
    font-size: 1.5rem;
    color: black;
`;
const colors = {first: true, second: false, third: false};

function Cart(props){

    return(
        <div>
            <BreadCrumbs></BreadCrumbs>
            <Flow {...colors}></Flow>
            <CartLabel>Корзина покупателя</CartLabel>
            <CartTable></CartTable>
            <CartButtonGroup></CartButtonGroup>
        </div>
    );
}


export default Cart;

