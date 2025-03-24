import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="frutile-logo-container">
        <Logo />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
