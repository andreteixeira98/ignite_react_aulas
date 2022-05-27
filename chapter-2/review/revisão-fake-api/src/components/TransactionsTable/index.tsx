import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionsTable(){

    useEffect(()=>{
       api.get('/transactions')
       .then(response => console.log(response.data));
    },[])

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
                    <tr>
                        <td >Desenvolvimento de site</td>
                        <td className="deposit">R$ 12000,00</td>
                        <td>Venda</td>
                        <td>12/04/2019</td>
                    </tr>
                    <tr>
                        <td >aluguel</td>
                        <td className="withdraw">-R$ 1000,00</td>
                        <td>casa</td>
                        <td>26/07/2020 </td>
                    </tr>
                    <tr>
                        <td >computador</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Venda</td>
                        <td>03/10/2010</td>
                    </tr>
                    <tr>
                        <td >hamburguer</td>
                        <td className="withdraw">-R$ 25,00</td>
                        <td>Alimentação</td>
                        <td>12/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}