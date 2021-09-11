import React from "react";
import {Counter} from "./Counter";
import {List} from "./List";
import {SpecialList} from "./SpecialList";
import {Profile} from "./Profile";
import {CheckinPet} from "./CheckinPet";
import {PetReturned} from "./PetReturned";

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <CheckinPet/>
            <PetReturned/>
            <Profile/>
            <Counter/>
            <List/>
            <SpecialList/>
        </>
    );
}
