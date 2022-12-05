import "./Header.css";
import NavbarLeft from "./NavbarLeft/NavbarLeft";
import NavbarRight from "./NavbarRight/NavbarRight";

const Header = () => {
  return (
    <header>
      <nav>
        <NavbarLeft />
        <NavbarRight />
      </nav>
    </header>
  );
};

export default Header;
