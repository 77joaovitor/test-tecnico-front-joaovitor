import { useEffect } from "react";
import { userContext } from "../../context/apiContext";
import ButtonAddProfile from "../ButtonAddProfile";
import Card from "../Card";
import Conteiner from "./style";

const CardListContainer = () => {
  const { users, Profile } = userContext();
  useEffect(() => {
    Profile();
  }, []);

  return (
    <Conteiner>
      {users.map((user) => (
        <Card key={user.login.uuid} user={user} />
      ))}
    </Conteiner>
  );
};

export default CardListContainer;
