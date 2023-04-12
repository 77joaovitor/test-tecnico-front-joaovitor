import styled from "styled-components";

const Conteiner = styled.div`
  overflow: scroll;

  display: flex;

  gap: 20px;
  padding: 1rem;

  &&::-webkit-scrollbar {
    display: none;
  }
`;

export default Conteiner;
