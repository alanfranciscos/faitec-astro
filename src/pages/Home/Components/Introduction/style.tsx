import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  img {
    width: 18.75rem;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    img {
      width: 40.75rem;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #ffffffff;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    margin-top: 8rem;
  }

  P {
    color: #ffffffff;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    margin-top: 2.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  @media screen and (min-width: 900px) {
    width: 70%;
    margin-left: 50px;
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 40px;
    }
  }
`;
