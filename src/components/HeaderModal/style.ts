import styled from "styled-components";

export const Container = styled.div`
  .modal__profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;

    width: 100%;
    .modal__profile-header--dotsContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 20%;

      .modal__profile-header--bell {
        font-size: 0.8rem;
      }
    }
  }

  .modal__profile-header--time {
    font-size: 0.8rem;
  }

  .modal__profile-header--chargeContainer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2px;

    width: 3rem;

    font-size: 0.8rem;
  }
`;
