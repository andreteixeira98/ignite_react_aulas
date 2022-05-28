import {createGlobalStyle} from 'styled-components';

export const GloabalStyle = createGlobalStyle`
    :root{
        --background:#F0F2F5;
        --text:#969CB3;
        --title:#363F5F;
        --shape:#FFFFFF;
        --red:#E62E4D;
        --green:#33CC95;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --text-body:#969CB3;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width:1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px){
            font: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body , input , textarea , button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3 , h4 , h5 , h6 , strong {
        font-weight:600;
    }

    button{
        cursor: pointer;
        
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
        
    }

    .react-modal-overlay{

        background: rgba(0,0,0, 0.5);
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .react-modal-content{

        width: 100%;
        max-width: 576px;
        height: 588px;

        position:relative;
        background: var(--background);

        padding: 3rem;
        border-radius: 0.24rem;




    }

    .close-modal-button{
        height: 1rem;
        width: 1rem;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent;
        border:0;
        display: flex;
        transition:filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

        img{
           flex: 1;
        }

    }

`;