import React from "react";
import {useMutation} from "@apollo/react-hooks";
import {loader} from 'graphql.macro';

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
    const [addUser, {data, loading, error}] = useMutation(mutationCreateAccount);
    const [values, setValue] = React.useState({
        account: {
            name: '',
            username: '',
            password: '',
        }
    });

    const handleChange = (event) => {
        event.persist();
        setValue((prevValues) => ({
            account: {
                ...prevValues.account,
                [event.target.name]: event.target.value
            }
        }));
    }

    const save = () => {
        addUser({
            variables: {account: values.account}
        });
    }

    // const save = () => {
    //     try {
    //         addUser({
    //             variables: {account: values.account}
    //         });
    //     } catch(e) {
    //         console.log('e.message', e.message)
    //     }
    // }

    return {handleChange, save, createdAccount: data && data.createAccount, loading, error};
}
