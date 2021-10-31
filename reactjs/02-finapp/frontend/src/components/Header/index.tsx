import logoImg from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
    onOpenNewTransactionModel: () => void;
}


export function Header({ onOpenNewTransactionModel }: IHeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type='button' onClick={onOpenNewTransactionModel}>New transaction</button>
            </Content>

        </Container>
    )
}