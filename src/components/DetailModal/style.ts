import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  position: absolute;

  background: rgba(0, 0, 0, 0.8);

  z-index: 100;

  .modal__profile {
    width: 100%;
    max-width: 25rem;
    height: 80vh;

    z-index: 1000;

    background: linear-gradient(45deg, #21b5e8, #93f0c8);

    border-radius: 8px;
    border: 2px solid black;

    animation: 1s ${fadeIn} ease-out;
  }

  .modal__profile-description {
    width: 100%;
    height: 50%;
    padding: 2rem;

    overflow: scroll;

    z-index: 10000;

    background-color: aliceblue;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
