import Modal from 'react-modal'
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import closeButton from '../../assets/images/closebutton.svg'
import { Form, TransactionTypeContainer, Button } from './styles'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();
        const entry = { title, price, category, transactionType };
        api.post('/dashboard', entry)
            .then((response) => { console.log(response) });
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