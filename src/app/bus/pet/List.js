import React from "react";
import {useQueryAllPets} from "./hooks/useQueryAllPets";

export const List = () => {
    const {loading, error, pets} = useQueryAllPets();

    return (
        <>
            <div style={{margin: '10px 0'}}>Animals list:</div>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {pets && pets.length &&
            <div>
                {pets.map(({id, name, weight, __typename}) =>
                    <div key={id}>
                        <span>id: {id}, </span>
                        <span>name: {name}, </span>
                        <span>weight: {weight}, </span>
                        <span>animal type: {__typename}</span>
                    </div>
                )
                }
            </div>
            }
        </>
    );
}
