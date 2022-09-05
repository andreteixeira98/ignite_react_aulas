import styled from "styled-components";


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 2rem;

    table{
        width: 100%;
       
        text-align: left;

        border-spacing:0 0.5rem;
        
        th{
           
            padding: 1rem 1.5rem;
            text-align: left;
            color:var(--text-body);
            font-weight: 400;

            
        }
        td{
            border:0;
            padding: 1rem 1.5rem;
            text-align: left;
            color:var(--text-body);
            background:var(--shape);

            &:first-child{
                color: var(--text-title);
            }
        }
        

        & .deposit{
            color: var(--green);
        }
        & .withdraw{
            color: var(--red);
        }
    }
`;