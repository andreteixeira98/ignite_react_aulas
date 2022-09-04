import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items:center;
    justify-content: space-between;

    padding: 1rem 2rem 10rem;



    button{
        font-size: 1rem;
        background: var(--blue-light);
        width: 12rem;
        height: 3rem;

        border: 0;
        border-radius: 0.25rem;

        color: rgba(255,255,255,1);

        font-weight: 500;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;