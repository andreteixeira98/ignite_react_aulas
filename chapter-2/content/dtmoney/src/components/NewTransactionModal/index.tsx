import { FormEvent, useState } from "react";
import Modal from 'react-modal';
import imgClose from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactionContext } from "../../hooks/ useTransactionContext";
import { Container, Form, TransactionButton, TransactionTypeContainer } from "./style";

Modal.setAppElement('#root');
interface newTransactionModalProps{
    isOpen:boolean;
    closeModal:()=>void;
}

export function NewTransactionModal({isOpen, closeModal}:newTransactionModalProps){

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('deposit');
    const [category, setCategory] = useState('');

    const {createTransaction} = useTransactionContext();
    


    async function handleSubmitTransaction(event:FormEvent){
        event.preventDefault();
       
      const statusCode = await createTransaction({
           title,
           amount,
           type:transactionType,
           category
       });

       if(statusCode === 201){
           
           setTimeout(()=>{
                closeModal();
           },500)
           setTitle('');
           setAmount(0);
           setTransactionType('deposit');
           setCategory('');
          
       }
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
                        placeholder="Amount"
                        value={amount}
                        onChange={(event)=> setAmount(Number(event.target.value))}
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