import React from 'react';
import {useCustomerCreator} from "./hooks/useCustomerCreator";

export const Customer = () => {
    const {handleChange, save, createdAccount, loading, error} = useCustomerCreator();

    const customerJSX = createdAccount && (
        <p>
            We already created account with name: {createdAccount.name}
        </p>
    );

    if (loading) {
        return (
            <p>
                Loading...
            </p>
        );
    }

    if (error) {
        return (
            <p>
                We have a problem: {error.message}
            </p>
        );
    }

    return (
        <>
            <h1>Customer</h1>
            <h2>Registration</h2>
            <input
                type="text"
                placeholder={'name'}
                name={'name'}
                onChange={handleChange}
            />
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
            <button onClick={save}>Save</button>
            <div>{customerJSX}</div>
        </>
    );
}
