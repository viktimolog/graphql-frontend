// Core
import React from 'react';

// Components
import {Registration} from './Registration';
import {Users} from './Users';
import {Login} from './Login';

export const User = () => {
    return (
        <>
            <Registration/>
            <Login/>
            <Users/>
        </>
    )
};
