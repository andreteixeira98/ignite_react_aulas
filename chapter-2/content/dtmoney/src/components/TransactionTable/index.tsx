import { Container } from "./styles";

export function TransactionTable(){
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
                 <tr>
                    <td>compras da semana</td>
                    <td className="withdraw">- 300</td>
                    <td>Casa</td>
                    <td>12/07/2022</td>
                </tr>

                <tr>
                    <td>venda carro</td>
                    <td className="deposit">10000</td>
                    <td>Vendas</td>
                    <td>10/04/2022</td>
                </tr>
               </tbody>
            </table>
        </Container>
    )
}