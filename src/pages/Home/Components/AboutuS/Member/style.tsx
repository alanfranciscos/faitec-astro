import styled from "styled-components"

export const Container = styled.div`
  margin-top: 1rem;
  width: 90%;
  height: max-content;
  padding: 10px 5px;
  padding-right: 340px;
  border-radius: 50px;
  background-color: #ffffffff;
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
`

export const ImageLink = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  margin-left: 1rem;
`

export const Content = styled.div`
  h2 {
    font-size: 1.2rem;
  }
  p {
    margin-top: 5px;
    margin-right: 10px;
  }
`
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  a {
    margin-right: 10px;
  }
`
