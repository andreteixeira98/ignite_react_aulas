import { FormEvent, useState } from "react";
import * as yup from 'yup';

import ReactModal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/entradas.svg';
import withdrawImg from '../../assets/saidas.svg';
import { useTransactions } from "../../hooks/useTransactions";
import { Content, Input, TransactionTypeButton, TransactionTypeContainer } from "./styles";

ReactModal.setAppElement("#root");
interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestCloseModal:()=>void;
}

export function NewTransactionModal({isOpen, onRequestCloseModal}:NewTransactionModalProps){

   
    const {createTransaction} = useTransactions(); 
    const [transactionType, setTransactionType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');



    const [isValidTitle, setIsValidTitle] = useState(false);
    const [isValidPrice, setIsValidPrice] = useState(false);
    const [isValidCategory, setIsValidCategory] = useState(false);
    
   

    function onChangeTitle(titleInput:string) {
        const titleSchema = yup.string().required();
        titleSchema.isValid(titleInput).then((valid)=>{
            setIsValidTitle(valid);
            setTitle(titleInput);
        }).catch((notValid=>{
            setIsValidTitle(false);
        }));
    }

    function onChangePrice(priceInput:number) {
        const priceSchema = yup.number().positive().required();
        priceSchema.isValid(priceInput).then((valid)=>{
            setIsValidPrice(valid);
            setPrice(Number(priceInput));
        }).catch((notValid=>{
            setIsValidPrice(false);
        }));
    }

    function onChangeCategory(categoryInput:string) {
        const categorySchema = yup.string().required();
        categorySchema.isValid(categoryInput).then((valid)=>{
            setIsValidCategory(valid);
            setCategory(categoryInput);
        }).catch((notValid=>{
            setIsValidCategory(false);
        }));
    }

    async function handleOnSubmitForm(event:FormEvent){
        event.preventDefault();
        
       const transactionSchema= yup.object({
        title:yup.string().required(),
        price:yup.number().positive().required().min(1),
        type:yup.string().required(),
        category:yup.string().required()
       });

        const transaction = {
            title,
            price,
            type:transactionType,
            category
        }

        try{
             await createTransaction(await transactionSchema.validate(transaction));
        }catch(err){
            // alert('Campos Inválidos!');

        }finally{
            setTitle('');
            setPrice(0);
            setCategory('');
            setTransactionType('deposit');
            setIsValidTitle(false);
            setIsValidPrice(false);
            setIsValidCategory(false);
        }


      
        setTimeout(()=>{
            onRequestCloseModal();
        },200);

        
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
            <Input 
                isValid={isValidTitle}
                type="text"  
                placeholder="Title"
                value={title}
               onChange={e=> onChangeTitle(e.target.value)}
               required
               
            />
            {/**onChange={event=> setPrice(Number(event.target.value))} */}
            <Input
                isValid={isValidPrice} 
                type="number" 
                placeholder="Price"
                value={price}
               onChange={e=> onChangePrice(Number(e.target.value))}
               required
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
            <Input
                isValid={isValidCategory} 
                type="text" 
                placeholder="category"
                value={category}
                onChange={e=> onChangeCategory(e.target.value)}
                required
            />
            <button type="submit">Cadastrar</button>
         </Content>
        </ReactModal>
    )
}