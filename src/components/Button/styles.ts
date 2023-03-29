import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    padding: 0.7rem 1.5rem;

    background-color: var(--font-blue);
    color: var(--font-white);

    border: none;
    border-radius: 0.2rem;

    transition:0.3s ease-in-out;

    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
    
`;