import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs'
import { App } from './App';



createServer({
  models:{
    transaction:Model 
  },

 /** other form used seeds
  * seeds(server){
    server.create('transaction',{
      id:'1',
      title:'web designer',
      price:3000,
      type:'withdraw',
      category:'job',
      created_At: new Date('2021-12-20 16:30:00')
    })
   },
  */

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'web designer',
          amount:3000,
          type:'withdraw',
          category:'business',
          created_At: new Date('2021-12-20 16:30:00:000')
        },
        {
          id:2,
          title:'web developer',
          amount:4000,
          type:'deposit',
          category:'job',
          created_At: new Date('2022-03-13 10:30:00:000')
        }
      ]
    })
  },

  
 
  routes(){
    this.namespace='/api';
    this.get('/transaction',()=>{
      return this.schema.all('transaction');
    })

    this.post("/transaction",(schema, request)=>{
      const data = JSON.parse(request.requestBody);
      

      return schema.create('transaction', data);
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

