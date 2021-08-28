import React, {useState} from 'react';
import {loader} from 'graphql.macro';
import {useMutation} from "@apollo/react-hooks";
//Hooks
import {useForm} from '../useForm';

//Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useCustomerAuth = () => {
    const [_logIn, {data}] = useMutation(mutationLogin);
    const {form, handleChange} = useForm({
        username: '',
        password: ''
    });
    // const [isAutorized, setIsAutorized] = useState(false);

    const autorizedCustomer = data && data.logIn;
    const token = autorizedCustomer && autorizedCustomer.token;

    if (token) {
        localStorage.setItem('token', token);
    }

    const logIn = () => {
        _logIn({
            variables: form
        });
    }

    return {
        handleChange,
        logIn,
        autorizedCustomer: data && data.logIn
    }
}
