import { Container, Form, TransactionButton, TransactionTypeContainer } from "./style";
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import imgClose from '../../assets/close.svg';
import { useState, FormEvent } from "react";
import { api } from "../../services/api";

Modal.setAppElement('#root');
interface newTransactionModalProps{
    isOpen:boolean;
    closeModal:()=>void;
}

export function NewTransactionModal({isOpen, closeModal}:newTransactionModalProps){

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [transactionType, setTransactionType] = useState('deposit');
    const [category, setCategory] = useState('');
    


    function handleSubmitTransaction(event:FormEvent){
        event.preventDefault();
       
        const data ={
            title,
            price,
            transactionType,
            category,
            created_At: new Date()
        }
        api.post('/transaction',data);
    }
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
                <Form onSubmit={handleSubmitTransaction}>
                    <h2>Cadastrar Transação</h2>
                    <input 
                        type="text" 
                        placeholder="Titulo"
                        value={title}
                        onChange={(event)=> setTitle(event.target.value)}
                    />

                    <input 
                        type="text" 
                        placeholder="Preço"
                        value={price}
                        onChange={(event)=> setPrice(Number(event.target.value))}
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
                        value={category}
                        onChange={(event)=> setCategory(event.target.value)}
                    />

                    <button type="submit"> Cadastrar</button>
                </Form>
                
            </Modal>
        </Container>
    )
}