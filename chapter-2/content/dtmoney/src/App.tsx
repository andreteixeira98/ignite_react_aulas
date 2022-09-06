import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer, Model, Request,} from 'miragejs';


createServer({
  
  routes(){
    this.namespace= process.env.REACT_APP_SERVER_BASE_URL ?? 'api';
    this.get('/times',()=>
      [
        {
          id:1,
          title:'Transaction',
          amount:400, 
          type:'deposit',
          category:'food',
          createdAt:new Date()
        }
      ]
    )
    

  }

})


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
     
  );
}