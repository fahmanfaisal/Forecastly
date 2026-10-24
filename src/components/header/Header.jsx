import { useState } from "react";

import Favourite from "./Favourite";
import FavouriteListModal from "./FavouriteListModal";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
    const [showFavModal, setShowFavModal] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav className="container flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <Logo />

                <div className="relative flex flex-1 items-center justify-end gap-3">
                    <Search />
                    <Favourite onShow={() => setShowFavModal(!showFavModal)} />
                    {showFavModal && <FavouriteListModal />}
                </div>
            </nav>
        </header>
    );
}

export default Header;
