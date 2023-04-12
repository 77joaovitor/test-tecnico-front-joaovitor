import { createContext, useContext, useState } from "react";
import { OldUsers, Props, User, UserContext } from "../interfaces";
import api from "../utils/api";

const Context = createContext({} as UserContext);

export const ApiProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[] | never>([]);
  const [addProfilePosition, setAddProfilePosition] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [detailProfile, setDetailProfile] = useState(null);

  const Profile = () => {
    api
      .get("")
      .then((res) => setUsers(res.data.results))
      .catch((err) => console.log(err));
  };

  const addProfile = () => {
    api
      .get("")
      .then((res) => setUsers((oldUsers) => [...res.data.results, ...oldUsers]))
      .catch((err) => console.log(err));
  };

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        Profile,
        addProfile,
        addProfilePosition,
        setAddProfilePosition,
        modalOpen,
        setModalOpen,
        detailProfile,
        setDetailProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const userContext = () => useContext(Context);
