import React from 'react';
import {useCustomerAuth} from "./hooks/useCustomerAuth";

export const Login = () => {
    const {handleChange, logIn, autorizedCustomer} = useCustomerAuth();

    const autorizedCustomerJSX = autorizedCustomer && (
        <>
            <p>Autorized Customer: {autorizedCustomer.customer.name}</p>
            <p>Token: {autorizedCustomer.token}</p>
        </>
    );

    return (
        <>
            <h1>Login</h1>
            <input
                type="text"
                placeholder={'username'}
                name={'username'}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder={'password'}
                name={'password'}
                onChange={handleChange}
            />
            <button onClick={logIn}>Login</button>
            {autorizedCustomerJSX}
        </>
    );
}
