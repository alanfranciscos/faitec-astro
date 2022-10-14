import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #ffffffff;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    margin-top: 2.5rem;
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

  img {
    width: 18.75rem;
  }
`

// type ColumnContainerProps = {
//   sidebarIsOpen?: boolean
// }

// export const ColumnContainer = styled.main<ColumnContainerProps>`
//   width: ${({ sidebarIsOpen }) =>
//     sidebarIsOpen ? 'calc(100% - 15.625rem)' : '100%'};
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   overflow-y: auto !important;
//   flex-grow: 1;
//   background-color: ${({theme}) => theme.colors.secondary};
// `

// export const Content = styled.div`
//   padding: 1.5rem;
// `
