import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { Books } from "./dadosPesquisas";

const SearchContainer = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 85px 0;
width: 100%;
`;
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
const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function Search() {
const [booksSearch,setbooksSearch] = useState([]);
  return (
    <SearchContainer>
        <Title>Ja sabe por onde começar?</Title>
        <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
        <Input placeholder="Escreva sua Proxima leitura"
        onBlur={(event) => {
            const text = event.target.value;

            const result = Books.filter(b => b.nome.includes(text) )
            console.log(text,result)
            setbooksSearch(result)

        }}/>

        {
        booksSearch.map(b => (
            <Result>
                <p>{b.nome}</p>
                <img src={b.src} alt={"imagen do " + b.nome } />
            </Result>
        ))
        }

    </SearchContainer>
  );
}
export default Search;
