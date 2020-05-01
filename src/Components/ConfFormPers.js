import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

const InputText = styled.input.attrs(props => {

    return {
    type: 'text',
    name: props.name
    } 

})`
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
const Spandiv = styled.span`
display: flex;
align-items: center;
`;
const TextArea = styled.textarea.attrs(
    {name:'area'}
    )`
    width: 100%;
    font-size: 12px;
    border: solid black 1px;
    margin-right: 20px;
`;
const RequiredSpan = styled.span`
    line-height: 1.5;
`;
const CheckBoxInput = styled.input.attrs(
     {type:'checkbox', name:'check' }
)`
    width: 18px;
    height: 18px;
`;

let initialValues ={ name: 'testname', phone: 'testphone', email: 'testemail', pay: '2', delivery: '2', check: false, area:'area' };

let onSubmit = (values,  actions ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000); }


function ConfFormPers(props){
    return (
        <Formik  initialValues={initialValues} onSubmit = {onSubmit}>
        { ( formikprops ) => (<form onSubmit = {formikprops.handleSubmit}>
        <legend>Данные клиента</legend>
        <FieldSet>
            <div>
                <label>Имя*</label>
                <InputText name = 'name' onChange = {formikprops.handleChange} value = {formikprops.values.name}></InputText>
            </div>
            <div>
                <label>Телефон*</label>
                <InputText name = 'phone' onChange = {formikprops.handleChange} value = {formikprops.values.phone}></InputText>
            </div>
            <div>
                <label>E-mail*</label>
                <InputText name = 'email' onChange = {formikprops.handleChange} value = {formikprops.values.email}></InputText>
            </div>
        </FieldSet>
        <legend>Параметры заказа</legend>
        <FieldSet>
            <ContainerDiv>
            <div>
                <div>
                    <label>Форма оплаты</label>
                </div>
                <select name = 'pay' onChange={formikprops.handleChange} value = {formikprops.values.pay}>
                    <option value = '1'>Наличный</option>
                    <option value = '2'>Безналичный</option>
                </select>
            </div>
            <div>
                <div>
                    <label>Доставка</label>
                </div>
                <select name = 'delivery' onChange={formikprops.handleChange} value = {formikprops.values.delivery}>
                    <option value = '1'>Самовывоз</option>
                    <option value = '2'>Транспортная компания</option>
                </select>
            </div>
            </ContainerDiv>
            <div>
                <label>Дополнительная информация</label>
            </div>
            <TextArea onChange = {formikprops.handleChange}  value = {formikprops.values.area}></TextArea>
            <Spandiv>
                <CheckBoxInput onChange = {formikprops.handleChange}  checked = {formikprops.values.check} ></CheckBoxInput>
                <RequiredSpan>*</RequiredSpan>
                <RequiredSpan>text long text long text very long tttteeeexxxttt</RequiredSpan>
            </Spandiv>

        </FieldSet>
            <button type="submit">
            Submit
          </button>
            </form>) }
    </Formik>
    );
}

export default ConfFormPers;





