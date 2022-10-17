import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  height: 6rem;
  position: fixed;
`;
export const Logo = styled.p`
  font-family: "planets";
  font-size: 2.5rem;
`;

export const Title = styled.p`
  font-family: "Games";
  font-size: 2.5rem;
`;
export const TitleContainer = styled.h1`
  font-weight: 400;
  display: flex;
  margin-top: 0.3rem;
`;
export const MenuIcon = styled.button`
  margin-right: 1rem;
  position: absolute;
  right: 10px;
  display: none;

  .gg-menu-right-alt {
    --ggs: 1.5;
  }
  border: none;
  background: none;
`;
export const SideBar = styled.div`
  display: none;
`;

export const MenuItem = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #000000;
  align-items: center;
  justify-content: center;
  :last-child {
    border: 0px solid #000000;
  }
  p {
    font-weight: bold;
    font-size: 23px;
  }
`;
