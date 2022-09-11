import { createServer } from 'miragejs';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

createServer({
  
  routes() {

    
    this.namespace = process.env.REACT_APP_SERVER_BASE_URL ?? 'api';
    
    // this.get('/times',()=>   [     {       id:1,       title:'Transaction',
    // amount:400,       type:'deposit',       category:'food',       createdAt:new
    // Date()     }   ] )

  }

})


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