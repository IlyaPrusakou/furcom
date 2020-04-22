import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Flow from './Flow';



function Cart(props){
    return(
        <div>
            <BreadCrumbs></BreadCrumbs>
            <Flow></Flow>
            <div>Корзина покупателя</div>
            <div>CartTable</div>
            <div>CartButtonGroup</div>
        </div>
    );
}


export default Cart;

