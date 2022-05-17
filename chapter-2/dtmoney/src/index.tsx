import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer} from 'miragejs'
import { App } from './App';



createServer({
  routes(){
    this.namespace='/api';
    this.get('/transactions',()=>{
      return [
        {
          id:1,
          title:'computer',
          amount:5000,
          type:'deposit',
          category:'vendas',
          createdAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

