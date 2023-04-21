import styled from "styled-components";

const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${(props) => props.cor || "#000"};
  font-size: 36px;
  text-align: ${(props) => props.textAlign || "center"};
  margin: 0;
`;
export default Title;
