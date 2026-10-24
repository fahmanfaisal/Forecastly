import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

function WeatherBoard() {
    return (
        <div className="container">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/5 backdrop-blur-2xl md:p-10 lg:p-14">
                <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                    <AddToFavourite />
                    <WeatherHeadline />
                    <WeatherCondition />
                </div>
            </div>
        </div>
    );
}

export default WeatherBoard;
