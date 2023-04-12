import styled, { css, keyframes } from "styled-components";

interface Container {
  animation: boolean;
  addProfilePosition: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  50% {
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Conteiner = styled.div<Container>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 10rem;

  opacity: 0.7;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  ${({ animation }) =>
    animation
      ? css`
          animation: 1s ${fadeIn} ease-out;
        `
      : null}

  @media (min-width: 360px) {
    border: 4px solid rgba(255, 255, 255);
    background: aliceblue;
    border-radius: 10px;

    width: 75%;
    max-width: 15rem;
    min-width: 15rem;
    height: 20rem;

    ${({ addProfilePosition }) =>
      addProfilePosition
        ? css`
            margin-left: 40%;
            height: 10rem;
            position: absolute;
            z-index: 10;
            bottom: 5rem;
            border: none;
          `
        : null}
  }
`;
export default Conteiner;
