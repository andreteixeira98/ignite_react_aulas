import entradasImg from '../../assets/income.svg';
import saidasImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactionContext } from "../../hooks/ useTransactionContext";
import { Container } from "./style";


export function Summary(){
    const {transactions} = useTransactionContext();

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraw +=transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
        
    },{
        deposit:0,
        withdraw:0,
        total:0
    })
    
    
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="entradas" />
                </header>
                <strong> 
                    {
                        new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                        }).format(summary.deposit)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="saidas" />
                </header>
                <strong> - 
                    {
                        new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                        }).format(summary.withdraw)
                        
                    }
                </strong>
            </div>
            <div
                className={summary.total >=0 ? 'totalGreen' : 'totalRed'}
            >
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong> 
                    {
                        new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                        }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}