import ButtonAddProfile from "../../components/ButtonAddProfile";
import CardListContainer from "../../components/CardListContainer";
import DetailProfileModal from "../../components/DetailModal";
import { userContext } from "../../context/apiContext";
import Conteiner from "./style";

export const Home = () => {
  const { addProfilePosition, setAddProfilePosition, modalOpen } =
    userContext();
  return (
    <Conteiner addProfilePosition={addProfilePosition}>
      {modalOpen && <DetailProfileModal />}
      <ButtonAddProfile onClick={() => setAddProfilePosition(true)} />
      <CardListContainer />
    </Conteiner>
  );
};
