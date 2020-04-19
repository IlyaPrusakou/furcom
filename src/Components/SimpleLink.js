import React from 'react';
import Button from 'react-bootstrap/Button'


const customButton = {
    fontFamily: 'Roboto Thin',
    borderWidth:'0.5px',
    padding: '0.4vw 1.2vw',
    fontSize:'1vw',
    borderRadius:'0px'
}


function SimpleLink(props){
    return (
        <Button variant="outline-light" style = { customButton }>{props.text}</Button>
    );
}

export default SimpleLink;


