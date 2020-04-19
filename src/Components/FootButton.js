import React  from 'react';


const lo_container = {
    display:'flex',
    marginTop:'10px',
    color:'white'
}
const lo_image = {
    marginRight:'1vw',
    width:'40px'
}
const oLabel = {
    fontFamily: 'Roboto Thin',
    alignSelf:'center'
}



function FootButton(props){
    return (
    <div style = { lo_container }>
        <img src = {props.text.path} style = {lo_image}></img>
        <div style = {oLabel}>{ props.text.label }</div>
        
    </div>)
}

export default FootButton;




