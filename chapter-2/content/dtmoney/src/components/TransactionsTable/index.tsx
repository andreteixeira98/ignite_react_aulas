import { useContext } from "react";
import { TransactionContext } from "../../context/ TransactionContext";
import { Container } from "./style";



export function TransactionsTable(){
   

    
    const {transactions} = useContext(TransactionContext);
   

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