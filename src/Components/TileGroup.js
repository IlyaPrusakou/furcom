import React  from 'react';
import Tile from './Tile';
import Style from '../Styles/cl_css_tile.module.css';


function Tilegroup(props){
    return( <div className = {Style.tile_group}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        </div> );
}

export default Tilegroup;









