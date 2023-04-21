import MenuHeaderIcon from "../MenuHeaderIcon";
import MenuHeaderItem from "../MenuHeaderItem";
import Logo from "../logo";
import "./estilo.css";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <MenuHeaderItem />
      <MenuHeaderIcon />
    </header>
  );
}

export default Header;
