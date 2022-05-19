import { Container, Content} from "./style";
import LogoImg from '../../assets/logo.svg';

export function Header (){
    return(
        <Container>
            <Content>
                <img src={LogoImg} alt="" />
                <button type="button">Nova transação</button>
            </Content>
        </Container>
    )
}