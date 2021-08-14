import React from "react";
import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";

export const Counter = () => {
    const {loading, error, data} = useQueryAvailablePets();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && data.availablePets && <p>Available pets: {data.availablePets}</p>}
        </>
    );
}
