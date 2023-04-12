import { userContext } from "../../context/apiContext";
import { Container } from "./style";
import HeaderModal from "../HeaderModal";
import ProfileModal from "../ProfileDetailModal";
import DescriptionDetailModal from "../DescriptionDetailModal";

const DetailProfileModal = () => {
  const { detailProfile, setModalOpen } = userContext();

  const dateTreat =
    detailProfile?.registered.date.substring(8, 10) +
    "/" +
    detailProfile?.registered.date.substring(5, 7) +
    "/" +
    detailProfile?.registered.date.substring(0, 4);

  const birthTreat =
    detailProfile?.dob.date.substring(8, 10) +
    "/" +
    detailProfile?.dob.date.substring(5, 7) +
    "/" +
    detailProfile?.dob.date.substring(0, 4);

  return (
    <Container>
      <div className="modal__profile">
        <HeaderModal />
        <ProfileModal />
        <div className="modal__profile-description">
          <DescriptionDetailModal
            keyName="Email"
            userDetail={detailProfile?.email}
          />
          <DescriptionDetailModal
            keyName="Phone"
            userDetail={detailProfile?.phone}
          />
          <DescriptionDetailModal
            keyName="Cellphone"
            userDetail={detailProfile?.cell}
          />
          <DescriptionDetailModal
            keyName="Nat"
            userDetail={detailProfile?.nat}
          />
          <DescriptionDetailModal
            keyName="City"
            userDetail={detailProfile?.location.city}
          />
          <DescriptionDetailModal
            keyName="Age"
            userDetail={detailProfile?.dob.age}
          />
          <DescriptionDetailModal keyName="Birthday" userDetail={birthTreat} />
          <DescriptionDetailModal
            keyName="Registered At"
            userDetail={dateTreat}
          />
        </div>
      </div>
    </Container>
  );
};

export default DetailProfileModal;
