import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  h1 {
    color: #ffffffff;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    margin-top: 3rem;
  }

  /* @media screen and (min-width: 900px) {
    height: max-content;
    h1 {
      font-size: 60px;
    }
  } */
`;
