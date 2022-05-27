import { Container } from "./style";
import entradasImg from  '../../assets/income.svg';
import saidasImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="entradas" />
                </header>
                <strong> R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="saidas" />
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="hight-light-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong> R$500,00</strong>
            </div>
        </Container>
    )
}