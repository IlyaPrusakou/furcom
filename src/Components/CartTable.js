import React from 'react';
import styled from 'styled-components';
import Checkbox from './CheckBox';

const TableDiv = styled.div`
	margin: 10px 70px 10px 70px;
	box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
	@media (max-width: 767px) {
		&:before{
			content: "Scroll horizontally >";
			display: block;
			text-align: right;
			font-size: 11px;
			color: black;
			padding: 0 0 10px;
		}
	}



`;
const Table = styled.table`
	border-radius: 5px;
	font-size: 12px;
	font-weight: normal;
	border: none;
	border-collapse: collapse;
	width: 100%;
	max-width: 100%;
	white-space: nowrap;
	background-color: white;

	@media (max-width: 767px) {
			display: block;
			width: 100%;
		}

`;
const Th = styled.th`
	font-family: 'Roboto Thin';
	text-align: center;
	padding: 8px;
	color: black;
	background: #dfdfdf;
	&:nth-child(odd) {
		color: #ffffff;
    	background: #4a4a4a;
	}
	@media (max-width: 767px) {
		display: block;

		padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
		text-overflow: ellipsis;

		text-align: left;
        border-bottom: 1px solid #f7f7f9;

		&:last-child{
			border-bottom: none;
		}
	}
`;
const Td = styled.td`
	text-align: center;
	padding: 8px;
	border-bottom: 0.8px solid black;
	font-size: 12px;
	@media (max-width: 767px) {
		padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
		text-overflow: ellipsis;

		tr &:nth-child(odd) {
			background: #F8F8F8;
			border-right: 1px solid #E6E4E4;
		}

		tr &:nth-child(even) {
			border-right: 1px solid #E6E4E4;
		}

		tbody & {
			display: block;
        	text-align: center;
		}

	}
`;
const Tr = styled.tr`
	&:nth-child(even) {
		background: #F8F8F8;
	}
	&:hover {
		background-color: #dfdfdf;
	}
	@media (max-width: 767px) {
		tbody & {
			display: table-cell;
		}
		tbody &:nth-child(odd) {
			background: none;
		}
		&:nth-child(even){
			background: transparent;
		}
	}


`;

const Thead = styled.thead`
	@media (max-width: 767px) {
		display: block;
		float: left;
	}
`;
const Tbody = styled.tbody`
	@media (max-width: 767px) {
		display: block;
		width: auto;
        position: relative;
        overflow-x: auto;
	}
`;


function CartTable(props){
    return (
        <TableDiv>
    		<Table>
        	<Thead>
        		<Tr>
            		<Th>Артикул</Th>
            		<Th>Цвет</Th>
            		<Th>Размер</Th>
            		<Th>Количество</Th>
            		<Th>Цена</Th>
					<Th>Отложить</Th>
					<Th>Удалить</Th>
        		</Tr>
        	</Thead>
        	<Tbody>
        		<Tr>
            		<Td>Content 1</Td>
            		<Td>Content 1</Td>
            		<Td>Content 1</Td>
            		<Td>Content 1</Td>
            		<Td>Content 1</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 2</Td>
            		<Td>Content 2</Td>
            		<Td>Content 2</Td>
            		<Td>Content 2</Td>
            		<Td>Content 2</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 3</Td>
            		<Td>Content 3</Td>
            		<Td>Content 3</Td>
            		<Td>Content 3</Td>
            		<Td>Content 3</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 4</Td>
            		<Td>Content 4</Td>
            		<Td>Content 4</Td>
            		<Td>Content 4</Td>
            		<Td>Content 4</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 5</Td>
            		<Td>Content 5</Td>
            		<Td>Content 5</Td>
            		<Td>Content 5</Td>
            		<Td>Content 5</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 6</Td>
            		<Td>Content 6</Td>
            		<Td>Content 6</Td>
           	 		<Td>Content 6</Td>
            		<Td>Content 6</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 7</Td>
            		<Td>Content 7</Td>
            		<Td>Content 7</Td>
            		<Td>Content 7</Td>
            		<Td>Content 7</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 8</Td>
            		<Td>Content 8</Td>
            		<Td>Content 8</Td>
            		<Td>Content 8</Td>
           			<Td>Content 8</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 9</Td>
            		<Td>Content 9</Td>
            		<Td>Content 9</Td>
            		<Td>Content 9</Td>
            		<Td>Content 9</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        		<Tr>
            		<Td>Content 10</Td>
            		<Td>Content 10</Td>
            		<Td>Content 10</Td>
            		<Td>Content 10</Td>
            		<Td>Content 10</Td>
					<Td><Checkbox></Checkbox></Td>
            		<Td><Checkbox></Checkbox></Td>
        		</Tr>
        	</Tbody>
    	</Table>
	</TableDiv>
    );
}

export default CartTable;

