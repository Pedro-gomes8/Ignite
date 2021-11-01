import { Container } from "./styles"
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>R$1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="outcome" />
                </header>
                <strong>R$932.00</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>R$1000.00</strong>
            </div>
        </Container>
    )
}