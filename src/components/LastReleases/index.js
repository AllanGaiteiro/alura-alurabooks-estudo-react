import styled from "styled-components";
import imagemLivro from "../../imagens/livro2.png";
import { CardBook } from "../CardBook/index.js";
import Title from "../Title";
import { Books } from "./dados";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;
function LastReleases() {
  return (
    <UltimosLancamentosContainer>
      <Title cor={"#EB9B00"}>ULTIMOS LANCAMENTOS</Title>
      <NewBooksContainer>
        {Books.map((b) => (
          <img src={b.src} alt={"imagen do" + b.nome} />
        ))}
      </NewBooksContainer>
      <CardBook
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}
export default LastReleases;
