import { createServer } from 'miragejs';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

createServer({
  
  routes() {

    
    this.namespace = process.env.REACT_APP_SERVER_BASE_URL ?? 'api';
    
    // this.get('/times',()=>   [     {       id:1,       title:'Transaction',
    // amount:400,       type:'deposit',       category:'food',       createdAt:new
    // Date()     }   ] )

  }

})

Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen,setNewTransactionModalOpen] = useState(false);

  function handleCloseNewTransactionModal(){
    setNewTransactionModalOpen(false);
  }

  function handleOpenNewTransactionModal(){
    setNewTransactionModalOpen(true);
  }
    return (
      <> 
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
        < Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestCloseModal={handleCloseNewTransactionModal}
        />
        <GlobalStyle/> 
      </>
    );
}