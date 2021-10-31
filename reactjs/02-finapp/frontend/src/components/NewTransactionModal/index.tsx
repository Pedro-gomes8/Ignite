import Modal from 'react-modal'

interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Post a new transaction</h2>
        </Modal>
    )
}