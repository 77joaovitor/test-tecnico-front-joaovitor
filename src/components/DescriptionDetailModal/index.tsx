import { UserDetailProps } from "../../interfaces";
import { Container } from "./style";

const DescriptionDetailModal = ({ userDetail, keyName }: UserDetailProps) => {
  return (
    <Container>
      <span>{keyName}</span>
      <p>{userDetail}</p>
    </Container>
  );
};

export default DescriptionDetailModal;
