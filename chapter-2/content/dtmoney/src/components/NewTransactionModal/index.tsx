import ReactModal from "react-modal";
import { Content, TransactionTypeButton, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/entradas.svg';
import withdrawImg from '../../assets/saidas.svg';
import { useState } from "react";

ReactModal.setAppElement("#root");
interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestCloseModal:()=>void;
}

export function NewTransactionModal({isOpen, onRequestCloseModal}:NewTransactionModalProps){

    const [transactionType, setTransactionType] = useState('deposit');

    return(
        <ReactModal 
          isOpen={isOpen}
          onRequestClose={onRequestCloseModal}
          className='react-modal-content'
          overlayClassName='react-modal-overlay'
        >
         <Content>
            <button 
                className="button-close-react-modal"
                onClick={onRequestCloseModal}
            >
                <img src={closeImg} alt="close imagen" />
            </button>
            <h2> Cadastrar Transação</h2>
            <input type="text"  placeholder="Title"/>
            <input type="number" placeholder="Price" />
            <TransactionTypeContainer>
                <TransactionTypeButton
                    type="button"
                    onClick={()=> {setTransactionType('deposit')}}
                    colorWhenActive="green"
                    isActive={transactionType === 'deposit'}
                   
                >
                    <img src={incomeImg} alt="Entradas" />
                    <span>Entrada</span>
                </TransactionTypeButton>

                <TransactionTypeButton
                    type="button"
                    onClick={()=> {setTransactionType('withdraw')}}
                    colorWhenActive="red"
                    isActive={transactionType === 'withdraw'}
                    
                >
                    <img src={withdrawImg} alt="Saidas" />
                    <span>Saida</span>
                </TransactionTypeButton>
            </TransactionTypeContainer>
            <input type="text" placeholder="category"/>
            <button type="submit">Cadastrar</button>
         </Content>
        </ReactModal>
    )
}