import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions();

    const getLocale = () => {
        return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
    }
    const locale = getLocale();
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.transactionType === 'deposit' ? 'income' : 'withdraw'}>{new Intl.NumberFormat(locale, {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.price)}</td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}