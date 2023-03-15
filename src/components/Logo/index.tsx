import logo from "../../assets/images/RRLogo.png";
import { ContainerLogo } from "./styles";

export const Logo = () => {
  return (
      <ContainerLogo>
      <img src={logo} alt="React Reminder Logo" />
      </ContainerLogo>
  );
}


