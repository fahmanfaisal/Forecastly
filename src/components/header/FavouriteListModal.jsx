import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

function FavouriteListModal() {
    const { favourites } = useContext(FavouriteContext);
    const { setSelectedLocation } = useContext(LocationContext);
    return (
        <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 py-4 text-white shadow-2xl shadow-black/50 backdrop-blur-xl">
            <h3 className="px-5 text-xs font-semibold uppercase tracking-widest text-white/50">
                Favourite Locations
            </h3>
            <ul className="mt-3 space-y-1 px-2">
                {favourites.length > 0 ? (
                    favourites.map((fav) => (
                        <li key={fav.location}>
                            <a
                                onClick={() => setSelectedLocation({ ...fav })}
                                className="block cursor-pointer rounded-xl px-3 py-2.5 font-medium transition-colors hover:bg-white/10"
                            >
                                {fav.location}
                            </a>
                        </li>
                    ))
                ) : (
                    <p className="px-3 py-2.5 text-sm text-white/50">
                        Nothing is added to Favourites!
                    </p>
                )}
            </ul>
        </div>
    );
}

export default FavouriteListModal;
