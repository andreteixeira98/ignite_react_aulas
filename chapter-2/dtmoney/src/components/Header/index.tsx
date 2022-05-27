import { useState } from "react";
import LogoImg from '../../assets/logo.svg';
import { Container, Content } from "./style";

interface HeaderProps{
   openModal:()=>void;
}

export function Header ({openModal}:HeaderProps){
   

    return(
        <Container>
            <Content>
                <img src={LogoImg} alt="" />
                <button 
                    type="button"
                    onClick={openModal}
                >
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}