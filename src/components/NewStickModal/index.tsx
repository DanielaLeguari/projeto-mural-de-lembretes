import { Container } from "./styled";

import Modal from "react-modal";
import { Button } from "../Button";

import { useState, useContext } from "react";
import NotesContext from "../../hooks/notesContext";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewStickModal = ({ isOpen, onRequestClose }: ModalProps) => {

    Modal.setAppElement("#root");

    const [stickyName, setStickName] = useState("");
    const [stickyDescription, setStickyDescription] = useState("");

    const {notes, setNotes} = useContext<any>(NotesContext);

    const formData = {
        title: stickyName,
        description: stickyDescription
    };

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        event.target.reset();
        onRequestClose(); //fechar o modal
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={true}
            className="react-modal-content"
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0,409)"
                }
            }}>
            <Container onSubmit={handleFormSubmit}>
                <h1>Criar Lembrete</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={(event) => setStickName(event.target.value)} />
                    <textarea
                        placeholder="Descrição"
                        onChange={(event) => setStickyDescription(event.target.value)}
                    />
                </div>
                <Button
                    title="Adicionar Lembrete"
                    click={() => setNotes([...notes, formData])} />
            </Container>
        </Modal>
    );
}

