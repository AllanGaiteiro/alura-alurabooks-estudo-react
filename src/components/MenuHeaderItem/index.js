import "./estilo.css";

const menuItens = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];
function MenuHeaderItem() {
  return (
    <ul className="menu">
      {menuItens.map((item) => (
        <li className="menu-item">{item}</li>
      ))}
    </ul>
  );
}

export default MenuHeaderItem;
