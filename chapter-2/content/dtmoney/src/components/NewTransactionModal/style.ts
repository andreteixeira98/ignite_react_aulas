import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';


export const Container = styled.div`
   
`;

export const Form = styled.form`

    width: 100%;
    max-width: 576px;
    height: 100%;
    max-height: 500px;
    
    display: flex;
    flex-direction: column;

   
    justify-content: space-evenly;

    h2{
        color: var(--title);
        font-weight: 600;
        font-size: 24px;
        margin-bottom:1rem;
    }
    input{
        height: 64px;
        width: 480px;
        padding: 0 1.5rem;
        background: #E7E9EE;
        color:var(--text-body);
        border: solid 1px #D7D7D7;
        border-radius: 0.3rem;
       
        outline-color: var(--text-body);

        &::placeholder{
            color:var(--text);
        }


        & + input{ // sempre tem um input antes
            margin-top: 0.1rem;
        }
    }



    button[type='submit']{
        height: 64px;
        width: 480px;
        font-weight: 600;
        margin-top: 1.5rem;
        border: solid 1px #D7D7D7;
        border-radius: 0.3rem;
        color:var(--shape);
        background: var(--green);
        transition: filter 0.2s;
       
        &:hover{
            filter: brightness(0.9);
        }
    }




    
`;

export const TransactionTypeContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 0.5rem;

    width: 100%;
    max-width: 576px;

    
`;

interface TransactionButtonProps{
    colorWhenActive: 'green' | 'red';
    isActive:boolean;
}

 const transactionButtonColors={
    green:'#33CC95',
    red:'#E62E4D'
 }
     
export const TransactionButton = styled.button<TransactionButtonProps>`

    height: 64px;
    display: flex;
    align-items: center;
    border: 1.5px solid #969CB3;
    border-radius: 0.3rem;
    justify-content: center;
    transition: border-color 0.2s;
    background: ${(props) => props.isActive?  
        transparentize(0.9, transactionButtonColors[props.colorWhenActive])
        :
        'transparent'};

    img{
        height: 20px;
        width: 20px;
    }
    span{
        margin-left: 1rem;
        font-size: 1rem;
        color:#363F5F;
    }

    &:hover{
        border-color:${darken(0.3,'#969CB3')};  
        
    }
`;