import { FormEvent, useContext, useState } from "react";
import ReactModal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/entradas.svg';
import withdrawImg from '../../assets/saidas.svg';
import { TransactionsContext } from "../../context/transactionsContext";
import { Content, TransactionTypeButton, TransactionTypeContainer } from "./styles";

ReactModal.setAppElement("#root");
interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestCloseModal:()=>void;
}

export function NewTransactionModal({isOpen, onRequestCloseModal}:NewTransactionModalProps){
    const {createTransaction} = useContext(TransactionsContext);
    const [transactionType, setTransactionType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');


    async function handleOnSubmitForm(event:FormEvent){
        event.preventDefault();
      await createTransaction({
        title,
        price,
        type:transactionType,
        category
       });

        setTimeout(()=>{
            onRequestCloseModal();
        },200);

        setTitle('');
        setPrice(0);
        setCategory('');
        setTransactionType('deposit');
    }

    return(
        <ReactModal 
          isOpen={isOpen}
          onRequestClose={onRequestCloseModal}
          className='react-modal-content'
          overlayClassName='react-modal-overlay'
        >
         <Content onSubmit={handleOnSubmitForm}>
            <button 
                className="button-close-react-modal"
                onClick={onRequestCloseModal}
            >
                <img src={closeImg} alt="close imagen" />
            </button>
            <h2> Cadastrar Transação</h2>
            <input 
                type="text"  
                placeholder="Title"
                value={title}
                onChange={event=> setTitle(event.target.value)}
            />
            <input 
                type="number" 
                placeholder="Price"
                value={price}
                onChange={event=> setPrice(Number(event.target.value))}
            />
            <TransactionTypeContainer>
                <TransactionTypeButton
                    type="button"
                    onClick={()=> {setTransactionType('deposit')}}
                    colorWhenIsActive="green"
                    isActive={transactionType === 'deposit'}
                >
                    <img src={incomeImg} alt="Entradas" />
                    <span>Entrada</span>
                </TransactionTypeButton>

                <TransactionTypeButton
                    type="button"
                    onClick={()=> {setTransactionType('withdraw')}}
                    colorWhenIsActive="red"
                    isActive={transactionType === 'withdraw'}
                    
                >
                    <img src={withdrawImg} alt="Saidas" />
                    <span>Saida</span>
                </TransactionTypeButton>
            </TransactionTypeContainer>
            <input 
                type="text" 
                placeholder="category"
                value={category}
                onChange={event=> setCategory(event.target.value)}
            />
            <button type="submit">Cadastrar</button>
         </Content>
        </ReactModal>
    )
}