import React  from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tile from './Tile';







function NewTile(props) {
    return (
        <Card  style = { {borderRadius:'0px', backgroundColor:'black', color:'white'} }>
           <Card.Body style = { {padding:'0%'} }>
                <Tile></Tile>
           </Card.Body>
        </Card>
    );
}


export default NewTile;



