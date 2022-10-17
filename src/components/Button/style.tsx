import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  height: 1.5rem;
  border-radius: 5px;
  text-decoration: none;
`;
