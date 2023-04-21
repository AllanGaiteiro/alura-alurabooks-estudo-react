import styled from "styled-components";
import Input from "../input";

const SearchContainer = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 85px 0;
height: 270px;
width: 100%;`;
const Title = styled.h2`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`;
const SubTitle = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;
`;

function Search() {
  return (
    <SearchContainer>
        <Title>Ja sabe por onde começar?</Title>
        <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
        <Input placeholder="Escreva sua Proxima leitura"></Input>
    </SearchContainer>
  );
}
export default Search;
