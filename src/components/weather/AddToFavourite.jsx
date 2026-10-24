import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";

import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

function AddToFavourite() {
    const { addToFavourites, removeFromFavourites, favourites } =
        useContext(FavouriteContext);

    const { weatherData } = useContext(WeatherContext);

    const [isFavourite, toggleFavourite] = useState(false);

    const { latitude, longitude, location } = weatherData;

    useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        toggleFavourite(found);
    }, []);

    function handleFavourites() {
        const found = favourites.find((fav) => fav.location === location);

        if (!found) {
            addToFavourites(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
        toggleFavourite(!isFavourite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end">
                <button
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 md:text-base ${
                        isFavourite
                            ? "border-rose-400/40 bg-rose-500/20 text-rose-100 hover:bg-rose-500/30"
                            : "border-white/15 bg-white/10 hover:border-white/30 hover:bg-white/20"
                    }`}
                    onClick={handleFavourites}
                >
                    <span>{isFavourite ? "Favourited" : "Add to Favourite"}</span>
                    <img
                        className="h-5 w-5"
                        src={isFavourite ? RedHeartIcon : HeartIcon}
                        alt="heart"
                    />
                </button>
            </div>
        </div>
    );
}

export default AddToFavourite;
