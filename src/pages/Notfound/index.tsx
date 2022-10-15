import { Container } from "./styles";
import Agnaldo from '../../assets/agnaldo.png';


export const Notfound = () => {
  return (
    <Container>
      <img src={Agnaldo} alt="Not found page" />
      <p>Agnaldo está triste porque a página que </p>
      <p>você tentou acessar não existe!</p>
    </Container>
  )
}