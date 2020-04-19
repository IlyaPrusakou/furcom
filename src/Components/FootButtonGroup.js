import React  from 'react';
import FootButton from './FootButton';

const lo_div_container = {
    display:'flex',
    justifyContent:'space-evenly'
};

const la_text = [{label:'furcom@tut.by', path:'http://localhost:8080/mail4.svg'},
                 {label:'furcom_belarus',  path:'http://localhost:8080/insta3.svg'},
                 {label:'+375255374360',  path:'http://localhost:8080/telg2.svg'}, 
                 {label:'+375255374360',  path:'http://localhost:8080/wat.svg'}];

function FootButtonGroup(props){
    
    return(<div style = { lo_div_container }>
        {
            la_text.map((value, index)=><FootButton key = {index} text = {value}></FootButton>)
        }
    </div>);
} 

export default FootButtonGroup;









