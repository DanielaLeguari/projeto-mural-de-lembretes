import { useState } from "react";

import { Button } from "../Button";
import { Logo } from "../Logo";
import { NewStickModal } from "../NewStickModal";

import { Container } from "./styles";


export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <Container>
            <Logo />
            <NewStickModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
            <Button title="Adicionar Lembrete" click={() => handleOpenModal()} />
        </Container>
    );
}


