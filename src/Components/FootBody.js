import React  from 'react';
import FootLabel from './Foot_label';
import FooterMenu from './FooterMenu';
import styled from 'styled-components';
import Style from '../Styles/cl_css_footer.module.css';


//local style objects 
const lo_top = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft:'20px',
    paddingRight:'20px'
};
const lo_top_container = {
    marginBottom: '20%',
    whiteSpace:'nowrap'
};
const lo_ul_style = {
    listStyleType: 'none',
    padding: '0px',
    fontFamily: 'Roboto Thin',
    fontSize:'1.5vw'
};
const lo_address = {
    width:'50%',
    whiteSpace:'nowrap',
    marginRight:'auto'
};
const lo_middle_container = {
    display:'flex',
    flexDirection:'column'
};
const lo_right_container = {
display:'flex',
flexDirection:'column'
};
const lo_p_style = {
    whiteSpace:'nowrap',
    fontFamily: 'Roboto Thin',
    fontSize:'1vw'
}; 
const lo_li_style = {
    marginBottom:'15px'
}
const oLabelBlack ={
    color:'black'
}

const href = {href:'#'};
const StyledLink = styled.a`
transition: .5s ease;
cursor: pointer;
color: white;
padding-bottom: 0.3vw;
border-bottom-style: solid;
border-color: black;
border-width: 0.8px;
&:hover {
    border-color: white;
    text-decoration: none;
    color: white;
}
a:link {
    text-decoration: none;
  }
  
a:visited {
    text-decoration: none;
  }
  
a:hover {
    text-decoration: none;
  }
  
a:active {
    text-decoration: none;
  }
`;


function FootBody(props){
    return (<div className = { Style.body_container }>
        <div className = { Style.flex_item } style = {lo_top}>
            <FootLabel color = {oLabelBlack}></FootLabel>
            <div style = { lo_top_container }>
                <ul style = {lo_ul_style}>
                    <li>Республика Беларусь, г. Минск,</li>
                    <li>ул.Веры Хоружей 6, ТЦ Зеркало</li>
                </ul>
            </div>
            <div style = { {display: 'flex'} }>
                <div style = {lo_address}>
                    <ul style = {lo_ul_style}>
                        <li>Режим работы</li>
                        <li>9:00 - 19:00</li>
                        <li>ПН - выходной</li>
                    </ul>
                </div>
                <div>
                    <ul style = {lo_ul_style} >
                        <li>+375255374360</li>
                        <li>+375255374360</li>
                        <li>+375255374360</li>
                    </ul>
                </div>   
            </div>
        </div>
        <div className = { Style.flex_item } style = {lo_middle_container}>
            <FootLabel></FootLabel>
            <FooterMenu></FooterMenu>
        </div>
        <div className = { Style.flex_item } style = {lo_right_container}>
            <FootLabel color = {oLabelBlack}></FootLabel>
            <div style = { {marginBottom:'15%'} }>
                <ul style = {lo_ul_style}>
                    <li style = { lo_li_style }><StyledLink>Регистрация</StyledLink></li>
                    <li style = { lo_li_style }><StyledLink>Войти</StyledLink></li>
                </ul>
            </div>
            <div>
                <p style = {lo_p_style}>ИП Прусаков Илья Александрович, <br/> УНП 691077624 Свидетельство выдано 13.11.2013г.<br/> 
                Пуховичским районным исполнительным комитетом <br/> Юридический адрес: Минская обл., Пуховичский район,<br/> п.Дружный, ул.Чепика, 12, кв.3</p>
            </div>
        </div>
    </div>)
}

export default FootBody;
