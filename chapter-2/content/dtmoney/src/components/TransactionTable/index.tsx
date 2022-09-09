import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionTable(){
    // const serverPort= process.env.REACT_APP_SERVER_PORT ?? 4000;
    // const serverBaseURL= process.env.REACT_APP_SERVER_BASE_URL ?? "api";
    
    useEffect(()=>{
        // api.post(`/times`,{"name":"crb"})
        // .then(response => console.log(response.data));

        // api.get('/times')
        // .then(response=> console.log(response.data));
    },[]);
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