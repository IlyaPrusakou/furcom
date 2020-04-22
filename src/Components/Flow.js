import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 150px;
`;

const InnerContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
height:100%
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
const LeftSmallSquare = styled.div`
position: absolute;
top: 50%;
left: 0%;
transform: translate( 0%, -50%);
width: 15px;
height: 15px;
border-left-style: solid;
color: black;
`;


function Flow(props){
    return (
        <Container>
            <InnerContainer>
                <div style = { {height:'50%', width:'70%', padding:'0%', margin:'0%', borderBottomStyle:'solid', borderColor:'black', alignSelf:'center'} }></div>
                <div style = { {height:'50%', padding:'0%', margin:'0%'} }></div>
                <div style = {{position:'absolute', height:'100%', width:'70%', alignSelf:'center'}}>
                    <LeftSmallSquare></LeftSmallSquare>
                    <LeftSquare>1</LeftSquare>
                    <Square>2</Square>
                    <RightSquare>3</RightSquare>
                </div>
               
            </InnerContainer>
        </Container>
    );
}


export default Flow;





