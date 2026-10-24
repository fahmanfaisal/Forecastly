import HeartIcon from "../../assets/heart.svg";

function Favourite({ onShow }) {
    return (
        <button
            type="button"
            onClick={onShow}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-white/30 hover:bg-white/20 md:text-base"
        >
            <img className="h-5 w-5" src={HeartIcon} alt="heart" />
            <span className="hidden sm:inline">Favourites</span>
        </button>
    );
}

export default Favourite;
