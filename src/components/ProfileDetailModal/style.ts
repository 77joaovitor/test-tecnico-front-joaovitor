import styled from "styled-components";

export const Container = styled.div`
  .modal__profile-backMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 0.6rem 0 0.6rem;

    > svg {
      cursor: pointer;
    }
  }

  .modal__profile-backMenu--viewprofile {
    color: white;
    font-weight: 200;

    font-size: 1.3rem;
  }

  .modal__profile-profileDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal__profile-profileDetail--img {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.5);

    width: 9rem;
    height: 9rem;

    > img {
      border-radius: 50%;
    }
  }

  .modal__profile-profileDetail--name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 3rem;

    > h1 {
      color: white;

      font-weight: 300;
      font-size: 1.8rem;

      margin: 0;

      height: 2.4rem;
    }

    > span {
      margin: 0;

      font-weight: 400;
      font-size: 0.8rem;
    }
  }

  .modal__profile-profileFolowers--folowers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #93f0c8;

    width: 50%;
    height: 4.5rem;
    > h2 {
      color: white;
      height: 2rem;
      margin: 0;
    }
    > span {
      font-size: 0.7rem;
      font-weight: 700;
    }
  }

  .modal__profile-profileFolowers {
    display: flex;
    margin-top: 2rem;
  }

  .modal__profile-profileFolowers--folowing {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #21b5e8;

    width: 50%;
    height: 4.5rem;
    > h2 {
      color: white;
      height: 2rem;
      margin: 0;
    }
    > span {
      font-size: 0.7rem;
      font-weight: 700;
    }
  }
`;
