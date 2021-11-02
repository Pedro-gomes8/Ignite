import Modal from 'react-modal'
import { FormEvent, useState, useContext } from 'react'

import { TransactionsContext } from '../../TransactionsContext'

import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import closeButton from '../../assets/images/closebutton.svg'


import { Form, TransactionTypeContainer, Button } from './styles'

interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext)

    const [transactionType, setTransactionType] = useState<"deposit" | "withdrawal">('' as "deposit" | "withdrawal");
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

    const handleCreateNewTransaction = async (event: FormEvent) => {
        event.preventDefault();
        await createTransaction({
            title, price, category, transactionType
        });

        setTitle('');
        setPrice(0);
        setCategory('');
        setTransactionType('' as "deposit" | "withdrawal");
        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'>

            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeButton} alt="Close" />
            </button>
            <Form onSubmit={handleCreateNewTransaction}>
                <h2>New transaction</h2>

                <input type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
                <input type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(event) => setPrice(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <Button
                        type='button'
                        onClick={() => setTransactionType('deposit')}
                        isActive={transactionType === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </Button>
                    <Button
                        type='button'
                        onClick={() => setTransactionType('withdrawal')}
                        isActive={transactionType === 'withdrawal'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </Button>
                </TransactionTypeContainer>

                <input type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)} />
                <button type="submit">Post</button>

            </Form>
        </Modal>
    )
}