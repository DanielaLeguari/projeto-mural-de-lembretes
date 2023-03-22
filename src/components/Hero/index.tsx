import { Container } from './styles';
import heroImg from "../../assets/images/Hero.png";

export const Hero = () => {
    return (
        <Container>
            <img src={heroImg} alt='Imagem de um campo com flores de lavanda' />
        </Container>
    );
}


