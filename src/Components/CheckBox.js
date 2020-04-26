import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
--background: #fff;
--border: black;
--border-hover: #BBC1E1;
--border-active: #1E2235;
--tick: #fff;
position: relative;
`;
const Input = styled.input`
label & {
    width: 21px;
    height: 21px;
    display: block;

    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: var(--background);
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    
    transition: box-shadow .3s;
    box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));

    &:hover {
        --s: 1px;
        --b: var(--border-hover);
    }
    &:checked {
        --b: var(--border-active);

        --s: 1px;
        transition-delay: .4s;
        & + svg {
            --a: 16.1 86.12;
            --o: 102.22;
        }
    }
}

`;
const Svg = styled.svg`
    label & {
        width: 21px;
        height: 21px;
        display: block;

        pointer-events: none;
        fill: none;
        stroke-width: 1px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        position: absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        transform: scale(var(--scale, 1)) translateZ(0);

        stroke-dasharray: var(--a, 86.12);
        stroke-dashoffset: var(--o, 86.12);
        transition: stroke-dasharray .6s, stroke-dashoffset .6s;
    }
`;
const Path = styled.path`

`;



function CheckBox(props){
    return(
        <Label>
            <Input type="checkbox"></Input>
                <Svg viewBox="0 0 21 21">
                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">

                    </path>
                </Svg>
        </Label> );
}

export default CheckBox;







