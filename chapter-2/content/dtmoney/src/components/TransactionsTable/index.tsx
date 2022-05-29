import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface TransactionsProps{
    id:number,
    title:string,
    price:number,
    type:string,
    category:string,
    created_At:string

}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(()=>{
        api.get('/transaction')
        .then(response => {
            console.log(response.data.transactions);
             setTransactions(response.data.transactions)
            
            })
       
    },[]);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td >{transaction.title}</td>
                            <td className={transaction.type}>
                                {
                                    new Intl.NumberFormat('pt-BR',{
                                        style:'currency',
                                        currency:'BRL'
                                    })
                                    .format(transaction.price)
                                }
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.created_At))
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}