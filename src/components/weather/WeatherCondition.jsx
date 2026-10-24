import { useContext } from "react";
import { WeatherContext } from "../../context";

import CloudyIcon from "../../assets/icons/cloud.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import TempMaxIcon from "../../assets/icons/temp-max.svg";
import TempMinIcon from "../../assets/icons/temp-min.svg";
import WindIcon from "../../assets/icons/wind.svg";

function WeatherCondition() {
    const { weatherData } = useContext(WeatherContext);
    const {
        maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind,
        climate,
    } = weatherData;

    const conditions = [
        { label: "Temp max", value: `${Math.round(maxTemperature)}°`, icon: TempMaxIcon },
        { label: "Temp min", value: `${Math.round(minTemperature)}°`, icon: TempMinIcon },
        { label: "Humidity", value: `${humidity}%`, icon: HumidityIcon },
        { label: "Cloudy", value: `${cloudPercentage}%`, icon: CloudyIcon },
        { label: "Wind", value: `${wind} km/h`, icon: WindIcon },
    ];

    return (
        <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 lg:text-sm">
                The climate is{" "}
                <span className="ml-1 rounded-full bg-sky-400/20 px-3 py-1 tracking-widest text-sky-200 ring-1 ring-sky-300/30">
                    {climate}
                </span>
            </p>
            <ul className="grid grid-cols-2 gap-3 lg:gap-4">
                {conditions.map((item) => (
                    <li
                        key={item.label}
                        className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 last:col-span-2 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium uppercase tracking-wider text-white/60 lg:text-sm">
                                {item.label}
                            </span>
                            <img
                                className="h-6 w-6 opacity-80 transition-opacity group-hover:opacity-100"
                                src={item.icon}
                                alt={item.label}
                            />
                        </div>
                        <p className="text-2xl font-semibold tracking-tight lg:text-3xl">
                            {item.value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WeatherCondition;
