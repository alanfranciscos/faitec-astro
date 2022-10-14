import githubIcon from "../../../../../assets/github.png";
import LinkedinIcon from "../../../../../assets/linkedin.png";

import { Container, Content, Image, ImageLink, Links } from "./style";
import { MemberProps } from "./type";

export const Member = ({
  image,
  name,
  contato,
  github,
  description,
}: MemberProps) => {
  return (
    <Container>
      <Image src={image} />
      <Content>
        <h2>{name}</h2>
        <p>
          <b>Descrição</b>
        </p>
        <p>{description}</p>
        <Links>
          <p>
            <a href={contato}>
              <ImageLink src={LinkedinIcon} />
            </a>
          </p>
          <p>
            <a href={github}>
              <ImageLink src={githubIcon} />
            </a>
          </p>
        </Links>
      </Content>
    </Container>
  );
};
