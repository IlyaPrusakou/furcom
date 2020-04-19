import React from 'react';
import TileContent from './TileContent';
import Style from '../Styles/cl_css_news.module.css';




const srt_label = 'Молнии';
const str_content = 'Металлические, пластиковые и спиральные молнии, тип 3, 5, 8, 10, потайные, плательные, курточные';


function Link_button(props) {


    return ( 
                <div className = { Style.wrapper }>
                        <img  src = {props.src} className = { Style.img }></img>
                        <TileContent label = { srt_label } content = { str_content } />
                </div> 
             );
}

export default Link_button;





