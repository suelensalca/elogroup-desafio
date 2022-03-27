import Column from './components/Column'
import styles from './board.module.scss'
import { useState } from 'react'
import Modal from 'react-modal'
import Lead from '../lead'

export default function Board() {
    const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);

    function handleOpenNewLeadModal() {
        setIsNewLeadModalOpen(true);
    }

    function handleCloseNewLeadModal() {
        setIsNewLeadModalOpen(false);
    }

    return (
        <div className={styles.boardContainer}>
            <div className={styles.buttonContainer}>
                <button
                    type="button"
                    onClick={handleOpenNewLeadModal}
                >
                    Novo Lead
                </button>
            </div>
            <div className ={styles.columnContainer}>
                <Column />
                <Column />
                <Column />
            </div>
            <Modal
                isOpen={isNewLeadModalOpen}
                onRequestClose={handleCloseNewLeadModal}
                overlayClassName="react-modal-overlay"
                className="reactModal"
            >
                <button
                    type="button"
                    onClick={handleCloseNewLeadModal}
                    className={styles.modalButton}
                >
                    &#10005;
                </button>
                <Lead />
            </Modal>
        </div>
    )
}