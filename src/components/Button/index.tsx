import { Container } from "./styles";

interface ButtonProps {
    title: string;
    click?: () => void;
}
                        //{data}:ButtonProps -> data.click
export const Button = ({title, click}:ButtonProps) => {
    return (
        <Container onClick={click}>
            {title}
        </Container>
    );
}
