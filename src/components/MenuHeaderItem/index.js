import styled from "styled-components";

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.ul`
  list-style: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;
const menuItens = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];
function MenuHeaderItem() {
  return (
    <MenuContainer>
      {menuItens.map((item) => (
        <Item>{item}</Item>
      ))}
    </MenuContainer>
  );
}

export default MenuHeaderItem;
