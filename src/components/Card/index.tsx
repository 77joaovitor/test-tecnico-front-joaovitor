import Conteiner from "./style";
import { UserResponse } from "../../interfaces";
import GenderIcon from "../GenderIcon";
import ButtonViewProfile from "../ButtonViewProfile";
import { userContext } from "../../context/apiContext";
const Card = ({ user }: UserResponse) => {
  const { setModalOpen, setDetailProfile } = userContext();

  const birtdayTreat =
    user?.dob.date.substring(8, 10) +
    "/" +
    user?.dob.date.substring(5, 7) +
    "/" +
    user?.dob.date.substring(0, 4);
  return (
    <Conteiner>
      <GenderIcon gender={user.gender} />
      <div className="card__container">
        <div className="card__container-img">
          <img src={user?.picture.medium} alt="" />
        </div>
        <div className="card__container-description">
          <h3>{user?.name.first + " " + user?.name.last}</h3>
          <span>{birtdayTreat}</span>
          <span>{user?.cell}</span>
          <ButtonViewProfile
            onClick={() => {
              setDetailProfile(user);
              setModalOpen(true);
            }}
          />
        </div>
      </div>
    </Conteiner>
  );
};

export default Card;
