import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}> 
          <h2> Cadastrar nova Transação </h2>
      </Modal>
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}
