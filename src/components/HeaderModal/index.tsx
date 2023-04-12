import { userContext } from "../../context/apiContext";
import { Container } from "./style";
import { AiOutlineWifi } from "react-icons/ai";
import { TiBatteryCharge } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

const HeaderModal = () => {
  return (
    <Container>
      <div className="modal__profile-header">
        <div className="modal__profile-header--dotsContainer">
          <BsThreeDots />
          <span className="modal__profile-header--bell">BELL</span>
          <AiOutlineWifi />
        </div>
        <span className="modal__profile-header--time">4:21 PM</span>
        <div className="modal__profile-header--chargeContainer">
          <span className="modal__profile-header--chargeNumber">22%</span>
          <TiBatteryCharge size={20} />
        </div>
      </div>
    </Container>
  );
};

export default HeaderModal;
