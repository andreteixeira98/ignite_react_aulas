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
    createTransaction:(transaction:TransactionInput)=> Promise<number>;
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

     async function createTransaction(transactionInput:TransactionInput){
       const response = await api.post('/transaction',{
           ...transactionInput,
           created_At: new Date()
        });
       const {status, data} = response;
       const {transaction} = data;
       

       if(status === 201){
           setTransactions([...transactions,transaction])
       }
       return status;
      
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