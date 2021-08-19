import React from "react";
import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";

export const Counter = () => {
    const {loading, error, data, networkStatus, refetch} = useQueryAvailablePets();

    console.log('networkStatus = ', networkStatus);
    //1 - loading,
    //2 - setVariables
    //3 - fetchMore
    //4 - refetch
    //6 - poll
    //7 - ready
    //8 - error

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && data.availablePets && <p>Available pets: {data.availablePets}</p>}
        </>
    );
}
