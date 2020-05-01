import React, { useState } from 'react';
import Flow from './Flow';
import ConfFormPers from './ConfFormPers';
import ConfFormComp from './ConfFormComp';
import styled from 'styled-components';

const TextDiv = styled.div`
    font-family: 'Roboto Thin';
    font-size: 1.5rem;
    color: black;
`;
const ActionButtonPers = styled.input.attrs({type: 'button'})`

`;
const colors = {first: false, second: true, third: false};

function Confirm(props) {

    let Form = '';

    const [type, setType] = useState('pers');

    if (type === 'pers') {
        Form = <ConfFormPers/>
    } 
    else if(type === 'comp') {
        Form = <ConfFormComp/>
    } 

    return (
        <div>
            <Flow {...colors}></Flow>
            <TextDiv>Оформить заказ</TextDiv>
            <ActionButtonPers value = 'Юридическое лицо' onClick={() => setType('comp')}></ActionButtonPers>
            <ActionButtonPers value = 'Физическое лицо' onClick={() => setType('pers')}></ActionButtonPers>
            {Form}
        </div>
    );
}        


export default Confirm;
