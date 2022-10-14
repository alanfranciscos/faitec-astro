import image from "../../../../assets/features.svg";

import { Container, List } from "./style";

export const Features = () => {
  return (
    <Container>
      <h1>POR QUE PRATICAR APENAS MATEMÁTICA?</h1>
      <img src={image} alt="features astro"></img>
      <List>
        <p>Em breve, outros conteúdos serão inseridos ao jogo.</p>
        <ul>
          <li>Astronomia;</li>
          <li>Física;</li>
          <li>Gramática;</li>
          <li>Geografia;</li>
          <li>História;</li>
          <li>E outros...</li>
        </ul>
      </List>
    </Container>
  );
};
