import React  from 'react';
import SimpleLink from './SimpleLink';
import Style from '../Styles/cl_css_news.module.css';


const srt_text = 'cмотреть';
const oLabel = {
    fontFamily: 'Roboto',
    fontSize:'1.2vw',
    position:'absolute',
    top:'10px',
    left:'50%',
    transform:'translate(-50%)'
};
const oContent = {
    paddingLeft:'15px',
    paddingRight:'15px',
    textAlign:'justify',
    fontFamily: 'Roboto Thin',
    fontSize:'0.9vw',
    position:'absolute',
    top:'4vw'
};
const oSimpleLink = {
    position:'absolute',
    bottom:'5px',
    left:'50%',
    transform:'translate(-50%)'
};

function TileContent(props){
    return (
        
            <>
                <div className = {Style.middle} style = {oLabel}>{props.label}</div>
                <div className = {Style.middle} style = {oSimpleLink}><SimpleLink text = { srt_text } /></div>
            </>
    );
}

export default TileContent;




