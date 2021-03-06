import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalIsOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setNewTransactionModalIsOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModel={handleOpenNewTransactionModal}></Header>

      <Dashboard></Dashboard>

      <NewTransactionModal isOpen={newTransactionModalIsOpen} onRequestClose={handleCloseNewTransactionModal}></NewTransactionModal>

      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  );
}

