import { Container, Form, TransactionButton, TransactionTypeContainer } from "./style";
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import imgClose from '../../assets/close.svg';
import { useState } from "react";

Modal.setAppElement('#root');

interface newTransactionModalProps{
    isOpen:boolean;
    closeModal:()=>void;
}

export function NewTransactionModal({isOpen, closeModal}:newTransactionModalProps){
    const [transactionType, setTransactionType] = useState('deposit');
    return(
        <Container>
            <Modal 
                isOpen={isOpen}
                onRequestClose={closeModal}      
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
            >
                
                <button
                    type="button"
                    onClick={closeModal}
                    className='close-modal-button'
                >
                    <img src={imgClose} alt="close modal button" />
                </button>
                <Form>
                    <h2>Cadastrar Transação</h2>
                    <input 
                        type="text" 
                        placeholder="Titulo"
                    />

                    <input 
                        type="text" 
                        placeholder="Preço"
                    />

                    <TransactionTypeContainer>
                        <TransactionButton 
                            type="button"
                            onClick={()=> setTransactionType('deposit')}
                            colorWhenActive='green'
                            isActive={transactionType==='deposit'? true: false}
                        >
                            <img src={incomeImg} alt="Entradas" />
                            <span>Entradas</span>
                        </TransactionButton>
                        
                        <TransactionButton 
                            type="button"
                            onClick={()=> setTransactionType('withdraw')}
                            colorWhenActive='red'
                            isActive={transactionType==='withdraw'? true : false}
                        >
                        <img src={outcomeImg} alt="Saidas" />
                            <span>Saidas</span>
                        </TransactionButton>
                    </TransactionTypeContainer>
                    <input 
                        type="text" 
                        placeholder="Categoria"
                    />

                    <button type="submit"> Cadastrar</button>
                </Form>
                
            </Modal>
        </Container>
    )
}