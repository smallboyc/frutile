import { FaLanguage } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="frutile-logo-container">
        <Logo />
      </div>
      <div className="header-info-container">
        <Navigation />
        <MdFavoriteBorder size={32} />
        <FaLanguage size={32} />
      </div>
    </header>
  );
};

export default Header;
