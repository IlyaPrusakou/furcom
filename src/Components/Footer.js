import React  from 'react';
import FootLabel from './Foot_label';
import FootBody from './FootBody';
import FootButtonGroup from './FootButtonGroup';
import Style from '../Styles/cl_css_footer.module.css';

const lo_line_style = {
    borderBottom:'1px solid rgba(255,255,255,.25)',
    marginTop:'20px',
    width:'95%',
    marginRight:'auto',
    marginLeft:'auto'
};

function Footer(props){
    return ( <div className = { Style.footer }>
        
        <FootBody></FootBody>
        <div style = {lo_line_style}></div>
        <FootButtonGroup></FootButtonGroup>
    </div> );
}


export default Footer;











