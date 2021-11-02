import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface ITransaction {
    id: string;
    title: string;
    price: number;
    category: string;
    createdAt: Date;
    transactionType: 'deposit' | 'withdrawal'
}

interface ITransactionsProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>


interface ITransactionsContext {
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext);


export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    useEffect(() => {
        api.get('/dashboard')
            .then(response => setTransactions(response.data));
    }, []);

    const createTransaction = async (transaction: TransactionInput) => {
        try {
            const response = await api.post('/dashboard', transaction);
            const date = new Date();
            let responseJSON = response.config.data;
            responseJSON = JSON.parse(responseJSON);
            const data = { ...responseJSON, createdAt: date.toDateString() };
            setTransactions([...transactions, data])
        } catch (error: any) {
            console.log(error.response);
        }
    }
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}