import React, { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        permission: null,
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            permission: "granted",
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
            permission: "denied",
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLocation((prevState) => ({
                ...prevState,
                loaded: true,
                permission: "unsupported",
                error: {
                    code: 0,
                    message: "Geolocation not supported",
                },
            }));
            return; // Return nothing here
        }

        // Check the permission status
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            } else if (result.state === "denied") {
                onError({
                    code: 1,
                    message: "Location permission denied",
                });
            }

            setLocation((prevState) => ({
                ...prevState,
                permission: result.state,
            }));
        });

        // Return nothing here (no cleanup needed)
    }, []);
    
    return location;
};

export default useGeoLocation;
