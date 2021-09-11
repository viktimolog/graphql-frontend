import React from 'react';
import {ApolloProvider} from "@apollo/react-hooks";
// import {client} from './init/client';
import {client} from './init/modern';
import {Pet} from "./bus/pet";
import {Customer} from "./bus/customer";
import {User} from "./bus/user";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            {/*<Customer/>*/}
            {/*<Login/>*/}
            {/*<Pet/>*/}
            <User />
        </ApolloProvider>
    )
};

