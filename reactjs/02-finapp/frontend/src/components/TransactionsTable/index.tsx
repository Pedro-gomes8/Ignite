import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ITransaction {
    id: string;
    title: string;
    price: number;
    category: string;
    createdAt: Date;
    transactionType: 'deposit' | 'withdrawal'
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    useEffect(() => {
        api.get('/dashboard')
            .then(response => setTransactions(response.data));
    }, []);

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
                    {transactions.map((transaction: ITransaction) => {
                        console.log(transaction.createdAt);
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.transactionType === 'deposit' ? 'income' : 'withdraw'}>{new Intl.NumberFormat('pt-BR', {
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