import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 150px;
`;

const InnerContainer = styled.div`
position: relative;
display: flex;
height:100%;
width:70%;
margin:auto;
`;
const Square = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 60px;
height: 60px;
border: solid black;
background-color: white;
color: black;
text-align: center;
&:hover{
    background-color: black;
    color: white;
};
`;
const LeftSquare = styled.div`
position: absolute;
top: 50%;
left: 5%;
transform: translate( 0%, -50%);
width: 60px;
height: 60px;
border: solid black;
background-color: white;
color: black;
&:hover{
    background-color: black;
    color: white;
};
`;
const RightSquare = styled.div`
position: absolute;
top: 50%;
right: 5%;
transform: translate( 0%, -50%);
width: 60px;
height: 60px;
border: solid black;
background-color: white;
color: black;
&:hover{
    background-color: black;
    color: white;
};
`;

const LeftBorder = styled.div`
    font-size:0;
    width:1px;
    height:10px;
    color:#fff;
    background-color:#000;
    margin:0%;
    padding:0%;
    align-self: center;
`;
const Line = styled.div`
    font-size:0;
    width:100%;
    height:1px;
    color:#fff;
    background-color:#000;    
    margin:0%;
    padding:0%;
    align-self: center;
`;

const StyledP = styled.p`
    font-family: 'Roboto';
    font-size: 1.5rem;
    text-align: center;
    color: black;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover{
        color: white;
    };
`;

function Flow(props){
    return (
        <Container>
            <InnerContainer>
                <LeftBorder></LeftBorder>
                <Line></Line>
                <LeftBorder></LeftBorder>
                <LeftSquare>
                    <StyledP>1</StyledP>
                </LeftSquare>
                <Square>
                    <StyledP>2</StyledP>
                </Square>
                <RightSquare>
                    <StyledP>3</StyledP>
                </RightSquare>
            </InnerContainer>
        </Container>
    );
}


export default Flow;





