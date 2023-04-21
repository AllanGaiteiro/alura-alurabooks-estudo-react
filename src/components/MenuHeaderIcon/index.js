import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import "./estilo.css";

const icones = [perfil, sacola];
function MenuHeaderIcon() {
  return (
    <ul className="menu">
      {icones.map((icon) => (
        <li className="menu-icone">
          <img src={icon} alt="icone"></img>
        </li>
      ))}
    </ul>
  );
}

export default MenuHeaderIcon;
