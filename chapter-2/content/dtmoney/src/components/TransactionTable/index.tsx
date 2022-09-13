import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionsProps{
    id:string;
    title:string;
    price:number;
    type:string;
    category:string;
    createdAt:Date;
}
export function TransactionTable(){
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
    
    useEffect(()=>{
       api.get('/transactions')
       .then(response => setTransactions(response.data.transactions));
    });
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
                </thead>

               <tbody>
                {transactions.map(transaction =>{
                    return(
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency:'BRL'
                                }).format(transaction.price)}
                            </td>
                            <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                    </tr>
                    )
                })}
               </tbody>
            </table>
        </Container>
    )
}