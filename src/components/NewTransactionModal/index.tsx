import { Container } from './styles';
import Modal from 'react-modal'


interface NewTransactionModalProps{
    isOpen: boolean; 
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"> 
            <Container>
                <h2> Cadastrar nova Transação </h2>
                <input placeholder="Titulo" />
                <input type="number" placeholder="Valor" />
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal> 
    );
}