import { ReactElement } from "react"

// import background from "src/assets/background.svg"

import { Header } from "../Header"
import { Container, Content } from "./style"

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </>
  )
}
