import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);
    function handleOpenNewTransactionModal(){
        setIsNewTrasactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTrasactionModalOpen(false)
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
