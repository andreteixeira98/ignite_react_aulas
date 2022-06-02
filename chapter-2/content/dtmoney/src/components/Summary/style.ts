import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;


    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
        }

        &.totalGreen{
            background: var(--green);
            color:#fff;
        }

        &.totalRed{
            background: var(--red);
            color: #fff;
        }

    }
    
`;

/**
 * interface DivTotalProps{
    backgroundColorTotal: 'green' | 'red';

}

const divTotalColor = {
    green:'#33CC95',
    red:'#E62E4D'
}
export const DivTotal = styled.div<DivTotalProps>`
    background: ${(props) => divTotalColor[props.backgroundColorTotal]};
    color: #fff;

`;
 */
