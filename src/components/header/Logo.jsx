import LogoImage from "../../assets/logo.svg";

export default function Logo() {
    return (
        <a
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-105"
        >
            <img className="h-9" src={LogoImage} alt="Weather App" />
        </a>
    );
}
