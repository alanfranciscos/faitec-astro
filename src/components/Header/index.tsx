import { v4 as uuidv4 } from "uuid";

import { Itens } from "./Itens";
import {
  Container,
  MenuIcon,
  Logo,
  Title,
  TitleContainer,
  MenuItem,
  SideBar,
} from "./style";

export const Header = () => {
  return (
    <Container>
      <TitleContainer>
        <Logo>v&nbsp;</Logo>
        <Title>ASTRO</Title>
      </TitleContainer>
      <MenuIcon>
        <link href="https://css.gg/menu-right-alt.css" rel="stylesheet"></link>
        <i className="gg-menu-right-alt"></i>
      </MenuIcon>
      <SideBar>
        {Itens.map((item) => {
          return (
            <MenuItem
              key={uuidv4()}
              onClick={() => {
                window.scrollTo(0, item.scrollY);
              }}
            >
              <p>{item.label}</p>
            </MenuItem>
          );
        })}
      </SideBar>
    </Container>
  );
};
