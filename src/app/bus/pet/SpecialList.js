import React from "react";
import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
    const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets();

    return (
        <>
            <div style={{margin: '10px 0'}}>Special animals list:</div>
            <button onClick={getAllAvailablePets}>Get all available list</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {pets && pets.length &&
            <div style={{margin: '10px 0'}}>
                {pets.map(({id, name, weight}) =>
                    <div key={id}>
                        <span>id: {id}, </span>
                        <span>name: {name}, </span>
                        <span>weight: {weight}, </span>
                    </div>)}
            </div>
            }
        </>
    );
}
