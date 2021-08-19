import React from "react";
import {useQueryProfile} from "./hooks/useQueryProfile";

export const Profile = () => {
    const {getProfile, loading, error, profile} = useQueryProfile();

    const loadProfile = () => {
        getProfile({
            variables: {
                id: "C-1"
            }
        });
    }

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
            <h1>Profile</h1>
            <button onClick={loadProfile}>Download profile</button>
            <p>{profile.name}</p>
        </>
    );
}
