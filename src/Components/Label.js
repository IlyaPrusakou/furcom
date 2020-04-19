import React  from 'react';
import Style from '../Styles/cl_css_label.module.css';


function Label(props){
let style = '';

if(props.top === '400px') {

    style  = Style.label_block_news;
} else if(props.top === '1000px') {

    style = Style.label_block_cat;

}

    return ( <div  className = { Style.label } >
        <p className ={ Style.text_news } >{ props.label }</p>
    </div> )
}


export default Label;


