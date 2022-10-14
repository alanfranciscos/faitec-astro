import { useState } from "react"

import { v4 as uuidv4 } from "uuid"

import { Itens } from "./Itens"
import {
  Container,
  MenuIcon,
  Logo,
  Title,
  TitleContainer,
  SideBar,
  MenuItem
} from "./style"

export const Header = () => {
  const [sidebarIsOpen, setSideBarIsOpen] = useState(false)

  return (
    <Container>
      <TitleContainer>
        <Logo>v&nbsp;</Logo>
        <Title>ASTRO</Title>
      </TitleContainer>
      <MenuIcon
        onClick={() => {
          setSideBarIsOpen(!sidebarIsOpen)
        }}
      >
        <link href="https://css.gg/menu-right-alt.css" rel="stylesheet"></link>
        <i className="gg-menu-right-alt"></i>
      </MenuIcon>
      {sidebarIsOpen && (
        <SideBar>
          {Itens.map((item) => {
            return (
              <MenuItem
                key={uuidv4()}
                onClick={() => {
                  window.scrollTo(0, item.scrollY)
                  setSideBarIsOpen(!sidebarIsOpen)
                }}
              >
                <p>{item.label}</p>
              </MenuItem>
            )
          })}
        </SideBar>
      )}
    </Container>
  )
}
