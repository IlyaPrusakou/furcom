import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;
const Th = styled.th`
    padding: 15px;
    background-color: rgba(255,255,255,0.2);
    color: #fff;
    text-align: left;
`;
const Td = styled.td`
    padding: 15px;
    background-color: rgba(255,255,255,0.2);
    color: #fff;
`;

const Thead = styled.thead`
 & {
	    th {
		    background-color: #55608f;
	        }
    }
`;

const TBody = styled.tbody`
& {
	tr {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			}
		}
	}
}
`;

function CartTable(props){
    return (
        <div>
	<Table>
		<Thead>
			<tr>
				<Th>Column 1</Th>
				<Th>Column 2</Th>
				<Th>Column 3</Th>
				<Th>Column 4</Th>
				<Th>Column 5</Th>
			</tr>
		</Thead>
		<TBody>
			<tr>
				<Td>Cell 1</Td>
				<Td>Cell 2</Td>
				<Td>Cell 3</Td>
				<Td>Cell 4</Td>
				<Td>Cell 5</Td>
			</tr>
			<tr>
				<Td>Cell 1</Td>
				<Td>Cell 2</Td>
				<Td>Cell 3</Td>
				<Td>Cell 4</Td>
				<Td>Cell 5</Td>
			</tr>
			<tr>
				<Td>Cell 1</Td>
				<Td>Cell 2</Td>
				<Td>Cell 3</Td>
				<Td>Cell 4</Td>
				<Td>Cell 5</Td>
			</tr>
			<tr>
				<Td>Cell 1</Td>
				<Td>Cell 2</Td>
				<Td>Cell 3</Td>
				<Td>Cell 4</Td>
				<Td>Cell 5</Td>
			</tr>
			<tr>
				<Td>Cell 1</Td>
				<Td>Cell 2</Td>
				<Td>Cell 3</Td>
				<Td>Cell 4</Td>
				<Td>Cell 5</Td>
			</tr>
		</TBody>
	</Table>
</div>
    );
}

export default CartTable;

