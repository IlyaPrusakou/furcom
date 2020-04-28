import React from 'react';
import Flow from './Flow';
import styled from 'styled-components';

const TextDiv = styled.div`
    font-family: 'Roboto Thin';
    font-size: 1.5rem;
    color: black;
`;
const InputText = styled.input.attrs({type:'text'})`
    width: 100%;
    font-size: 12px;
    border: solid black 1px;
    margin-right: 20px;
`;
const FieldSet = styled.fieldset`
    border: 1px solid black;
    padding: 15px;
`;
const ContainerDiv = styled.div`
    display: flex;
`;
const TextArea = styled.textarea`
    width: 100%;
    font-size: 12px;
    border: solid black 1px;
    margin-right: 20px;
`;

function Confirm(props) {
    return (
        <div>
            <Flow></Flow>
            <TextDiv>Оформить заказ</TextDiv>
            <div>
                <legend>Данные клиента</legend>
                <FieldSet>
                    <div>
                        <label>Имя*</label>
                        <InputText></InputText>
                    </div>
                    <div>
                        <label>Телефон*</label>
                        <InputText></InputText>
                    </div>
                    <div>
                        <label>E-mail*</label>
                        <InputText></InputText>
                    </div>
                </FieldSet>
                <legend>Параметры заказа</legend>
                <FieldSet>
                    <ContainerDiv>
                    <div>
                        <div>
                            <label>Форма оплаты</label>
                        </div>
                        <select>
                            <option value = '1' selected>Наличный</option>
                            <option value = '2'>Безналичный</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label>Доставка</label>
                        </div>
                        <select>
                            <option value = '1' selected>Самовывоз</option>
                            <option value = '2'>Транспортная компания</option>
                        </select>
                    </div>
                    </ContainerDiv>
                    <div>
                        <label>Дополнительная информация</label>
                    </div>
                    <TextArea></TextArea>
                    <ContainerDiv>
                        <input type = 'checkbox'></input>
                        <div>*</div>
                        <div>text</div>
                    </ContainerDiv>

                </FieldSet>
            </div>
        </div>
    );
}        


export default Confirm;
