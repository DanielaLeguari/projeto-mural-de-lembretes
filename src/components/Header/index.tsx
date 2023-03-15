import { Logo } from "../Logo";
import { Container } from "./styles";


export const Header = () => {
    return (
        <Container>
            <Logo/>
            <button>Adicionar lembrete</button>
        </Container>
    );
}


