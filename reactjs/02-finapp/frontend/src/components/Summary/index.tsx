import { Container } from "./styles"
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"
export function Summary() {
    const { transactions } = useContext(TransactionsContext);
    let income = 0, outcome = 0;
    transactions.forEach((transaction) => transaction.transactionType === 'deposit' ? income += transaction.price : outcome += transaction.price)
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>{
                    new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(income)
                }</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="outcome" />
                </header>
                <strong>{`- ${new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(outcome)}`}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>{new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(income - outcome)}</strong>
            </div>
        </Container>
    )
}