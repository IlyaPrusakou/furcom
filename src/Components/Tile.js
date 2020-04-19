import React  from 'react';
import Link_buttom from './Link_buttom';
import Style from '../Styles/cl_css_tile.module.css';


const str_image = 'http://localhost:8080/tile.jpg';


function Tile(props){
    return(<div className = {Style.tile} style = { {width:'100%'} }><Link_buttom src = { str_image } /></div> );
}

export default Tile;





