import { useContext } from "react";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import PinIcon from "../../assets/pin.svg";

import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

function WeatherHeadline() {
    const { weatherData } = useContext(WeatherContext);

    const { climate, location, temperature, time } = weatherData;

    function getWeatherIcon(climate) {
        switch (climate) {
            case "Rain":
                return RainIcon;
            case "Clouds":
                return CloudIcon;
            case "Clear":
                return SunnyIcon;
            case "Snow":
                return SnowIcon;
            case "Thunder":
                return ThunderIcon;
            case "Fog":
                return HazeIcon;
            case "Haze":
                return HazeIcon;
            case "Mist":
                return HazeIcon;

            default:
                return SunnyIcon;
        }
    }

    return (
        <div className="flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between gap-6 md:flex-col md:items-start">
                <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 ring-1 ring-white/20 md:h-24 md:w-24">
                    <img
                        className="h-12 w-12 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)] md:h-14 md:w-14"
                        src={getWeatherIcon(climate)}
                        alt="climate"
                    />
                </div>
                <h1 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-7xl font-extralight leading-none tracking-tighter text-transparent lg:text-8xl xl:text-9xl">
                    {Math.round(temperature)}°
                </h1>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <img className="h-6 w-6 lg:h-7 lg:w-7" src={PinIcon} alt="pin" />
                    <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                        {location}
                    </h2>
                </div>
                <p className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-sm text-white/70 lg:text-base">
                    <span className="font-medium text-white">
                        {getFormattedDate(time, "time", false)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    {getFormattedDate(time, "date", false)}
                </p>
            </div>
        </div>
    );
}

export default WeatherHeadline;
