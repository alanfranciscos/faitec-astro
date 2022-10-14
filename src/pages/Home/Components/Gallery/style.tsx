import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (min-width: 900px) {
    align-items: flex-start;
  }
`
// Title
export const Title = styled.h1`
  align-items: center;
  color: #ffffffff;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  text-align: center;
  margin-top: 3rem;
`

export const Content = styled.div`
  margin-top: 3rem;
  width: 300px;
  height: 300px;
  border-radius: 50px;
  background-color: #ffffffff;

  @media screen and (min-width: 900px) {
    width: 800px;
    height: calc(100vh - 30%);
  }
`
