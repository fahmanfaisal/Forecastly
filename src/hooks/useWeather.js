import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const [error, setError] = useState(null);

    const { selectedLocation } = useContext(LocationContext);

    const fetchWeatherData = async (latitude, longitude, signal) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching weather data...",
            });

            const response = await fetch(
                `/api/weather?lat=${latitude}&lon=${longitude}`,
                { signal }
            );

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };
            setWeatherData(updateWeatherData);
        } catch (err) {
            if (err.name === "AbortError") return;
            setError(err);
        } finally {
            if (!signal?.aborted) {
                setLoading({
                    ...loading,
                    state: false,
                    message: "",
                });
            }
        }
    };

    useEffect(() => {
        const controller = new AbortController();

        setLoading({
            ...loading,
            state: true,
            message: "Finding location...",
        });

        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeatherData(
                selectedLocation.latitude,
                selectedLocation.longitude,
                controller.signal
            );
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                // geolocation can't be cancelled, so skip the fetch if this effect was cleaned up
                if (controller.signal.aborted) return;
                fetchWeatherData(
                    position.coords.latitude,
                    position.coords.longitude,
                    controller.signal
                );
            });
        }

        return () => controller.abort();
    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return {
        weatherData,
        error,
        loading,
    };
};

export default useWeather;
