import styled from "styled-components";


export const Container = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;

    div{
        background: var(--shape);
        padding:1.5rem 2rem;
        border-radius: 0.25rem;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{ 
            margin-top:2rem;
            font-size: 2rem;
            font-weight: 500;
            display: block;
            color:var(--text-title);
            line-height: 3rem;
        }
    }
    & .total-positive-balance{
        background-color: var(--red);
        color:var(--shape);
        
        strong{
            color: var(--shape);
        }
    }

    & .total-negative-balance{
        background-color: var(--red);
        color:var(--shape);
        
        strong{
            color: var(--shape);
        }
    }
    
`;
    