import styled, { css } from "styled-components";

interface Container {
  addProfilePosition: Boolean;
}

const Conteiner = styled.main<Container>`
  display: flex;
  flex-direction: column-reverse;

  height: 100vh;
  width: 100vw;

  height: 100vh;
  @media (min-width: 360px) {
    ${({ addProfilePosition }) =>
      addProfilePosition
        ? css`
            flex-direction: column-reverse;
            justify-content: center;
          `
        : css`
            flex-direction: row;
            align-items: center;
            justify-content: center;
          `}
  }
`;

export default Conteiner;
