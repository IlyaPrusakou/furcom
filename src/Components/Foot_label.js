import React  from 'react';
import Style from '../Styles/cl_css_footer.module.css';
import { checkPropTypes } from 'prop-types';


function FootLabel(props) {
    return (
    <div>
        <div style = {props.color} className = { Style.label_text }>Furcom</div>
    </div>
    )
}

export default FootLabel;
