import styled from "styled-components";

export const Container = styled.header`
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 10vh;
    padding: 0 4rem;

    background-color: var(--header);

    > img {
        height: 2.5rem;
    }

    > p {
        color: var(--font-white);
    }
` ;