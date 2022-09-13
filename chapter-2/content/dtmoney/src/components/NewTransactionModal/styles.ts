import styled from "styled-components";
import {darken, transparentize} from 'polished'


export const Content = styled.form`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   
    justify-content: space-between;

    
    .button-close-react-modal{
        position: absolute;
        top:1rem;
        right: 1rem;

        width: 2.5rem;
        height: 2.5rem;

        border:0;
        background: transparent;

        transition: filter 0.2s;

        
        &:hover{
            filter: brightness(0.8);
        }
    }
    h2{
        color: var(--text-title);
        font-weight: 600;
       

    }

    input{
        background-color: #E7E9EE;
        color: var(--text-body);
        width: 30rem;
        height: 4rem;
        padding: 1rem;
        border: 1px solid #D7D7D7;
        border-radius: 0.25rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        line-height: 0.25rem;


        &::placeholder{
            color:var(--text-body);
        }


    }

    button[type=submit]{
        background-color: var(--green);
        height: 4rem;
        width: 30rem;
        border: 0;
        color: var(--shape);
        font-size: 1rem;
        font-weight: 600;
        border-radius: 0.25rem;
        transition: filter 0.2s;

        &:hover{
            filter:brightness(0.9);
        }
    }

`;


export const TransactionTypeContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    
`

interface TransactionTypeButtonProps{
    isActive:boolean;
    colorWhenIsActive: "red" | "green";
}

const colors ={
    green:'#33CC95',
    red:'#E62E4D'
}
export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
    

    background-color: ${props=>props.isActive ? 
        transparentize(0.9,colors[props.colorWhenIsActive])
        : 
        'transparent'};
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #D7D7D7;
    border-radius: 0.25rem;

    transition: background-color 0.2s;

    img{
        width: 1.5rem;
        height: 1.5rem;
    }
    span{
        margin-left: 1.25rem;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 00.1rem;
        color:var(--text-title);
        
    }
    
    &:hover{
        background-color: ${(props)=> transparentize(0.9, colors[props.colorWhenIsActive])};
       
    }
    

`;