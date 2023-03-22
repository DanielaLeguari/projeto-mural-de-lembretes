import { useState } from "react";

import { Button } from "../Button";
import { Logo } from "../Logo";

import { Container } from "./styles";


export const Header = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }

    return (
        <Container>
            <Logo/>
            <p>{number}</p>
            <Button title="Adicionar Lembrete" click={increment}/>
        </Container>
    );
}


