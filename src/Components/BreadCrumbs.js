import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function BreadCrumbs(props){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="http://localhost:3000/">
                главная
            </Breadcrumb.Item>
            <Breadcrumb.Item active = { true }>
                корзина
            </Breadcrumb.Item> 
        </Breadcrumb>
     );
}


export default BreadCrumbs;









