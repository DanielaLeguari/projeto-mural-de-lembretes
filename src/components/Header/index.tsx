import { Container } from "./styles";
import logo from "../../assets/images/RRLogo.png";

export const Header = () => {
    return (
        <Container>
            <img src={logo} alt="React Reminder Logo" />
            <button>Adicionar lembrete</button>
        </Container>
    );
}


