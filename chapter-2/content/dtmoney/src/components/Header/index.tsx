import { Container, Content } from "./style";
import logo from '../../assets/logo.svg'



interface HeaderProps{
  onOpenNewTransactionModal:()=>void;
}
export function Header(props:HeaderProps){
  return (
    <Container>
        <Content>
            <img src={logo} alt="logo dtmoney" />

            <button
                type="button"
                onClick={props.onOpenNewTransactionModal}
            >
                Nova Transação
            </button>
        </Content>
    </Container>
  )  
}