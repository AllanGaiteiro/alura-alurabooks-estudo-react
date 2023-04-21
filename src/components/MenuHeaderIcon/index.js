import styled from "styled-components";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`;
const Icon = styled.ul`
  list-style: none;
  margin-right: 40px;
  width: 25px;
  align-items: center;
`;

const icones = [perfil, sacola];
function MenuHeaderIcon() {
  return (
    <MenuContainer>
      {icones.map((icon) => (
        <Icon>
          <img src={icon} alt="icone"></img>
        </Icon>
      ))}
    </MenuContainer>
  );
}

export default MenuHeaderIcon;
