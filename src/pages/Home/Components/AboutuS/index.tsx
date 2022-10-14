import alanImage from "../../../../assets/alan.svg";
import carlosImage from "../../../..//assets/carlos.svg";
import leandroImage from "../../../..//assets/leandro.svg";
import { v4 as uuidv4 } from "uuid";

import { Member } from "./Member";
import { Container } from "./style";

export const AboutUs = () => {
  const infoMembers = [
    {
      name: "Alan Silva",
      contato: "https://www.linkedin.com/in/alan-francisco-silva-a64342149/",
      image: alanImage,
      github: "https://github.com/alanfranciscos",
      description:
        "Front-end intern em 4Intelligence e ex competidor da olimpíada do conhecimento.",
    },
    {
      name: "Carlos Eduardo de Almeida",
      contato:
        "https://www.linkedin.com/in/carlos-eduardo-de-almeida-rosa-135643197/",
      image: carlosImage,
      github: "https://github.com/CarlosEduard0o",
      description: "Hello world.",
    },
    {
      name: "Leandro Leite",
      contato: "https://www.linkedin.com/in/leandro-leite-760931186/",
      image: leandroImage,
      github: "https://github.com/LeandroLeite98",
      description: "Estudante de sistemas de informação 2º período.",
    },
  ];

  return (
    <Container>
      <h1>SOBRE NÓS</h1>
      {infoMembers.map((member) => {
        return (
          <Member
            key={uuidv4()}
            name={member?.name}
            contato={member?.contato}
            image={member?.image}
            github={member?.github}
            description={member?.description}
          />
        );
      })}
    </Container>
  );
};
