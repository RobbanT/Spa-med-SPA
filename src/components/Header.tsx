import "./Header.css";
import logo from "../assets/spa-icon2.svg";

function Header() {
    return (
        <header>
            <img src={logo} />
            <h1>Spa med SPA</h1>
        </header>
    );
}

export default Header;
