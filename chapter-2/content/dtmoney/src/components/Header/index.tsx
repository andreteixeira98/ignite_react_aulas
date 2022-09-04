import { Container, Content } from "./style";
import logo from '../../assets/logo.svg'

export function Header(){
  return (
    <Container>
        <Content>
            <img src={logo} alt="logo dtmoney" />

            <button
                type="button"
            >
                Nova Transação
            </button>
        </Content>
    </Container>
  )  
}