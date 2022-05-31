import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContextProvider } from './context/ TransactionContext';
import { GloabalStyle } from './styles/global';

export function App() {

  const [isNewTransactionsModalOpen, setNewTransactionsModalOpen] = useState(false);

  

  function handleOpenNewTrasactionsModal(){
      setNewTransactionsModalOpen(true);
  }
  function handleCloseNewTransactionsModal(){
      setNewTransactionsModalOpen(false);
  }
  return (
    <TransactionsContextProvider>
      <Header openModal={handleOpenNewTrasactionsModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionsModalOpen}
        closeModal={handleCloseNewTransactionsModal}

      />
      <GloabalStyle />
    </TransactionsContextProvider>
  );
}

