import styled from "styled-components";


export const Conteiner = styled.header`
  width: 100%;
  background-color: #e6e6e6;
`

export const Nav = styled.nav`
  ul {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  li a {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
    transition: all 0.5s ease-in;

    &:hover{
      opacity: .7;
    }

  }

`