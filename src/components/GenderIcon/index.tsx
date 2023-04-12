import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { Gender } from "../../interfaces";
import Container from "./style";

const GenderIcon = ({ gender }: Gender) => {
  if (gender === "male") {
    return (
      <Container>
        <CgGenderMale color="rgb(130 103 172)" size={48} />
      </Container>
    );
  }
  return (
    <Container>
      <CgGenderFemale color="rgb(130 103 172)" size={48} />
    </Container>
  );
};

export default GenderIcon;
