import { userContext } from "../../context/apiContext";
import { Container } from "./style";
import HeaderModal from "../HeaderModal";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const ProfileModal = () => {
  const { detailProfile, setModalOpen } = userContext();
  return (
    <Container>
      <div className="modal__profile-backMenu">
        <IoIosArrowBack
          color="white"
          size={24}
          onClick={() => setModalOpen(false)}
        />
        <h1 className="modal__profile-backMenu--viewprofile">View Profile</h1>
        <AiOutlinePlus color="white" size={24} />
      </div>
      <div className="modal__profile-profileDetail">
        <div className="modal__profile-profileDetail--img">
          <img src={detailProfile?.picture.large} alt="" />
        </div>
        <div className="modal__profile-profileDetail--name">
          <h1>{detailProfile?.name.first + " " + detailProfile?.name.last}</h1>
          <span>
            {detailProfile?.location.state +
              ", " +
              detailProfile?.location.country}
          </span>
        </div>
      </div>
      <div className="modal__profile-profileFolowers">
        <div className="modal__profile-profileFolowers--folowers">
          <h2>44.000</h2>
          <span>FOLLOWERS</span>
        </div>
        <div className="modal__profile-profileFolowers--folowing">
          <h2>44.000</h2>
          <span>FOLLOWING</span>
        </div>
      </div>
    </Container>
  );
};

export default ProfileModal;
