import { useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

function Search() {
    const { setSelectedLocation } = useContext(LocationContext);

    const doSearch = useDebounce((term) => {
        const fetchedLocation = getLocationByName(term);
        setSelectedLocation({ ...fetchedLocation });
    }, 500);

    function handleChange(e) {
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <form action="#" className="w-full max-w-xs">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-2 pl-5 pr-2 transition-all duration-300 focus-within:border-sky-400/60 focus-within:bg-white/15 focus-within:ring-4 focus-within:ring-sky-400/20">
                <input
                    className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-white/50 md:text-base"
                    type="search"
                    placeholder="Search location..."
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-500/80 transition-colors hover:bg-sky-400"
                >
                    <img className="h-4 w-4" src={SearchIcon} alt="Search" />
                </button>
            </div>
        </form>
    );
}

export default Search;
