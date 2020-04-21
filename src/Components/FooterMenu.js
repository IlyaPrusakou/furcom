import React  from 'react';
import styled from 'styled-components';


const lo_div_text = {
    textAlign:'center',
    fontFamily: 'Roboto Thin',
    marginBottom:'20px'
};

const href = {href:'#'};
const StyledLink = styled.a`
transition: .5s ease;
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





function FooterMenu(props){

    return(
        <div>
          
            <div style = {lo_div_text}><StyledLink {...href}>О нас</StyledLink></div>
            <div style = {lo_div_text}><StyledLink {...href}>Каталог</StyledLink></div>
            <div style = {lo_div_text}><StyledLink {...href}>Корзина</StyledLink></div>
            <div style = {lo_div_text}><StyledLink {...href}>Контакты</StyledLink></div>
          
        </div>);
}

export default FooterMenu;





