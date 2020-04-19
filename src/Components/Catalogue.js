import React  from 'react';
import Tilegroup from './TileGroup';
import Style from '../Styles/cl_css_tile.module.css';


function Catalogue(props){
    return ( <div className = {Style.catalogue}>
        <Tilegroup />
        <Tilegroup />
        <Tilegroup />
        <Tilegroup />
        <Tilegroup />
        <Tilegroup />
        <Tilegroup />
    </div> );
}

export default Catalogue;









