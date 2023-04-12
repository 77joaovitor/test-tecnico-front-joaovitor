import { userContext } from "../../context/apiContext";
import Conteiner from "./style";
import { BiPlusCircle } from "react-icons/bi";
import { ReactNode, useState } from "react";
import { OnClick } from "../../interfaces";

const ButtonAddProfile = ({ onClick }: OnClick) => {
  const { addProfile } = userContext();
  const [animation, setAnimation] = useState(false);
  const { addProfilePosition } = userContext();
  return (
    <Conteiner
      addProfilePosition={addProfilePosition}
      onClick={onClick}
      animation={animation}
    >
      <div>
        <BiPlusCircle
          size={100}
          onClick={async () => {
            setAnimation(true);
            await addProfile();
          }}
        />
      </div>
    </Conteiner>
  );
};

export default ButtonAddProfile;
