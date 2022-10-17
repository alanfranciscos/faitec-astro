import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  h1 {
    color: #ffffffff;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    margin-top: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  img {
    width: 15rem;
  }
`;

export const List = styled.section`
  color: #ffffffff;
  p {
    margin: 30px;
    margin-bottom: 10px;
  }
  ul {
    margin: 20px;
    margin-left: 50px;
    margin-top: 0px;
  }
  li {
  }
`;
