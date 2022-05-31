import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsProps{
    id:number,
    title:string,
    price:number,
    type:string,
    category:string,
    created_At:string

}

//type TransactionInput = Omit<TransactionsProps, 'id' | 'created_At'>;

type TransactionInput = Pick<TransactionsProps, 'title' | 'price' | 'type' |   'category'>;


interface TransactionsContextProvideProps{
    children: ReactNode,
}

interface TransactionContextData{
    transactions:TransactionsProps[];
    createTransaction:(transaction:TransactionInput)=> void;
}
export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData);


 export function TransactionsContextProvider({children}:TransactionsContextProvideProps){
     const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

   useEffect(()=>{
        api.get('/transaction')
        .then(response => {
            setTransactions(response.data.transactions)
            
        })
       
    },[]);

     function createTransaction(transaction:TransactionInput){
       api.post('/transaction',transaction);
      
    }

    return (
        <TransactionContext.Provider 
        value={
                {
                    transactions, 
                    createTransaction
                }
        }>
            {children}
        </TransactionContext.Provider>
    )
 }