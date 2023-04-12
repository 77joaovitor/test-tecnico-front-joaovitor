import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  border: 4px solid rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;

  width: 75%;
  max-width: 17rem;
  min-width: 15rem;
  height: 20rem;
  transition: 0.2s;

  animation: 1s ${fadeIn} ease-out;

  .card__container {
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card__container-img {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    > img {
      border: 10px solid aliceblue;
      border-radius: 50%;

      width: 7rem;
      height: 7rem;
    }
  }
  .card__container-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.4rem;
    > h3 {
      font-size: 1rem;
    }
  }
`;

export default Conteiner;
