import React from 'react';


export const Store = {
    ConfirmValues:{}
}
const setConfirmValues = () => {

};

export const ValueContext = React.createContext({
    ConfirmValues: Store.ConfirmValues,
    setConfirmValues: setConfirmValues
});


