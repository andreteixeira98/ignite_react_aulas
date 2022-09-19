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
    
   
    const onChangeInput = {
        onTitle:(titleInput:string)=>{
            const titleSchema= yup.string().required();
            
            setTitle(titleInput);
            titleSchema.isValid(titleInput).then(valid => {
               
                setIsValidTitle(valid);
            });
        },

        onPrice:(priceInput:number)=>{
            const priceSchema = yup.number().positive().moreThan(0).required();

            setPrice(priceInput);
            priceSchema.isValid(priceInput).then(valid=>{
                setIsValidPrice(valid);
            })
        },
        onCategory:(categoryInput:string)=>{
            const categorySchema = yup.string().required();

            setCategory(categoryInput);

            categorySchema.isValid(categoryInput).then(valid=>{
                setIsValidCategory(valid);
            })
        }
    }
        
        
    



    async function handleOnSubmitForm(event:FormEvent){
        event.preventDefault();
        
        const transaction = {
            title,
            price,
            type:transactionType,
            category
        }

        try{
            if(isValidTitle && isValidPrice && isValidCategory){
                await createTransaction(transaction);
                setTimeout(()=>{
                   
                    onRequestCloseModal();
                },200);
            }else{
                alert('Dados Inválidos');
            }
             
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
               onChange={e=> onChangeInput['onTitle'](e.target.value)}
               
               
            />
            {/**onChange={event=> setPrice(Number(event.target.value))} */}
            <Input
                isValid={isValidPrice} 
                type="number" 
                placeholder="Price"
                value={price}
               onChange={e=> onChangeInput['onPrice'](Number(e.target.value))}
               
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
                onChange={e=> onChangeInput['onCategory'](e.target.value)}
                required
               
            />
            <button type="submit">Cadastrar</button>
         </Content>
        </ReactModal>
    )
}