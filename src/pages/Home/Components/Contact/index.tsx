import image from "../../../../assets/contato.svg";
import { Button } from "../../../../components/Button";

import { Container } from "./style";

export const Contact = () => {
  return (
    <Container>
      <h1>CONTATO</h1>
      <p>Encontrou algum BUG ou tem alguma sugestão? Fale conosco.</p>
      <p>Entre em contato através do nosso email</p>
      <a href="mailto:gameastrofai@gmail.com">
        <Button text="Enviar e-mail" />
      </a>
      <img src={image} alt="contact"></img>
    </Container>
  );
};
