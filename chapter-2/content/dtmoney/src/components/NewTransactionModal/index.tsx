import ReactModal from "react-modal";
import { Content } from "./styles";


interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestCloseModal:()=>void;
}

export function NewTransactionModal({isOpen, onRequestCloseModal}:NewTransactionModalProps){

    return(
        <ReactModal 
          isOpen={isOpen}
          onRequestClose={onRequestCloseModal}
          className='react-modal-content'
          overlayClassName='react-modal-overlay'
        >
         <Content>
            <h2> Cadastrar Transação</h2>
            <input type="text"  placeholder="Title"/>
            <input type="number" placeholder="Price" />
            <div>
                <button>Entradas</button>
                <button>Saidas</button>
            </div>
            <input type="text" placeholder="category"/>
            <button type="submit">Cadastrar</button>
         </Content>
        </ReactModal>
    )
}