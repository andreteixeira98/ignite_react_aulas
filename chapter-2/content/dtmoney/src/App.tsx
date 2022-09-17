import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

import { TransactionsProvider } from './context/transactionsContext';

createServer({

  models:{
    transaction:Model
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          title:'compras da semana',
          price:500,
          type:'withdraw',
          category:'compras',
          createdAt: new Date()
        },
        {
          title:'compras da semana',
          price:500,
          type:'withdraw',
          category:'compras',
          createdAt: new Date()
        }
      ]
    })
  },
  routes() {
  

    this.namespace = process.env.REACT_APP_SERVER_BASE_URL ?? 'api';
    
    this.get('/transactions',()=> { 
      return this.schema.all("transaction");
    } )

    this.post("/transactions", (schema, request)=>{
      const data = JSON.parse(request.requestBody);

      schema.create('transaction', data);

      return data;
    })

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
      <TransactionsProvider> 
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
        <Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestCloseModal={handleCloseNewTransactionModal}
        />
        <GlobalStyle/> 
      </TransactionsProvider>
    );
}