import incomeImg from '../../assets/entradas.svg';
import withdrawImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";



export function Summary(){
    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc,transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.price;
        }else{
            acc.withdraw += transaction.price;
        }
        return acc;
    },{
        deposit:0,
        withdraw:0,
        total:0
    })

   summary.total = summary.deposit - summary.withdraw;

    return(
        <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="Entradas" />
                    </header>
                    <strong>
                        {
                        new Intl.NumberFormat('pt-BR',{
                            currency:"BRL",
                            style:'currency'

                        }).format(summary.deposit)
                        }
                    </strong>

                </div>
                 <div>
                    <header>
                        <p>Saídas</p>
                         <img src={withdrawImg} alt="Saidas" />
                    </header>
                   <strong>- 
                        {
                        new Intl.NumberFormat('pt-BR',{
                            currency:'BRL',
                            style:'currency'
                        }).format(summary.withdraw)
                        }
                   </strong>
                </div>  

                 <div 
                    className={
                    summary.total>=0? 'total-positive-balance':
                    'total-negative-balance'
                    }
                >
                    <header>
                        <p>Total</p>
                         <img src={totalImg} alt="Total" />
                    </header>
                   
                    <strong>
                        {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(summary.total)}
                    </strong>

                </div>
        </Container>
    )

}