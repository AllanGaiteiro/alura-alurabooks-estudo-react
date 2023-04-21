import styled from "styled-components";
import MenuHeaderIcon from "../MenuHeaderIcon";
import MenuHeaderItem from "../MenuHeaderItem";
import Logo from "../logo";
const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`;
function Header() {
  return (
    <HeaderContainer className="App-header">
      <Logo />
      <MenuHeaderItem />
      <MenuHeaderIcon />
    </HeaderContainer>
  );
}

export default Header;
