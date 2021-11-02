import { Container } from "./styles"
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import { useTransactions } from "../../hooks/useTransactions"

export function Summary() {
    const { transactions } = useTransactions();


    const summary = transactions.reduce((accumulator, transaction) => {
        if (transaction.transactionType === 'deposit') {
            accumulator.income += transaction.price;
            accumulator.total += transaction.price;
        } else {
            accumulator.outcome += transaction.price;
            accumulator.total -= transaction.price;
        }
        return accumulator;
    }, {
        income: 0,
        outcome: 0,
        total: 0
    })
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
                    }).format(summary.income)
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
                }).format(summary.outcome)}`}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>{new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}