import { Container } from "./style";
import Modal from 'react-modal'
import {GrClose} from  'react-icons/gr'

Modal.setAppElement('#root');

interface newTransactionModalProps{
    isOpen:boolean;
    closeModal:()=>void;
}

export function NewTransactionModal({isOpen, closeModal}:newTransactionModalProps){
    return(
        <Container>
            <Modal 
                isOpen={isOpen}
                onRequestClose={closeModal}      
                contentLabel='example modal' 
            >
                <h2>new transaction</h2>
                <button
                    type="button"
                    onClick={closeModal}
                >
                    <GrClose 
                        color="red"
                        height={40}
                        width={40}
                    />
                </button>
            </Modal>
        </Container>
    )
}