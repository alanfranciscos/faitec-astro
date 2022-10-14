import image from "./../../../../assets/home.svg";
import { Container, Text } from "./style";

const Introduction = () => {
  return (
    <>
      <Container>
        <Text>
          <h1>INTRODUÇÃO AO ASTRO</h1>
          <p>
            Astro é um jogo de aprendizado matemático. Os usuários praticam e
            competem entre si e através de um sistema de ranking. Os exercícios
            incluem desde operações matemáticas básicas como soma e subtração
            até equações e geometria básica.
          </p>
        </Text>
        <img src={image} alt="Imagem de introdução"></img>
      </Container>
    </>
  );
};

export default Introduction;
