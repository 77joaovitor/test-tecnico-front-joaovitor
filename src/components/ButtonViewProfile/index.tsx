import { OnClickButtonView } from "../../interfaces";
import Conteiner from "./style";

const ButtonViewProfile = ({ onClick }: OnClickButtonView) => {
  return <Conteiner onClick={onClick}>View profile</Conteiner>;
};

export default ButtonViewProfile;
