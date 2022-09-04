import income from '../../assets/entradas.svg';
import withdraw from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { Container } from "./styles";



export function Summary(){
    return(
        <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={income} alt="Entradas" />
                    </header>
                    <strong>R$ 1000</strong>

                </div>
                 <div>
                    <header>
                        <p>Saídas</p>
                         <img src={withdraw} alt="Saidas" />
                    </header>
                   <strong>R$ -500</strong>
                </div>

                 <div className='hight-light-background'>
                    <header>
                        <p>Total</p>
                         <img src={total} alt="Total" />
                    </header>
                   
                    <strong>R$ 500</strong>

                </div>
        </Container>
    )

}