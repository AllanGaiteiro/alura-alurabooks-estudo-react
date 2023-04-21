import styled from "styled-components";
import Title from "../Title";

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;
const Button = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;
const Description = styled.p`
  max-width: 300px;
`;
const Subtitle = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;
const ImageBook = styled.img`
  width: 150px;
`;
export function CardBook({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
      <div>
        <Title fontSize="16px" cor="#EB9B00" textAlign="left">
          {titulo}
        </Title>
        <Subtitle>{subtitulo}</Subtitle>
        <Description>{descricao}</Description>
      </div>
      <div>
        <ImageBook src={img} />
        <Button>Saiba mais</Button>
      </div>
    </Card>
  );
}

export default CardBook;
