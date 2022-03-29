import Column from "./components/Column";
import styles from "./board.module.scss";
import Modal from "react-modal";
import Lead from "../lead";
import { useState, useEffect, useCallback } from "react";
import createServer from "../../services/server";

Modal.setAppElement("body");

export default function Board() {
  let server = createServer;
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  let [boards, setBoards] = useState([]);
  let [updatedLead, setUpdatedLead] = useState({});

  let boardCallback = useCallback((lead) => {
    setUpdatedLead(lead);
    handleCloseNewLeadModal();
  }, []);

  function handleOpenNewLeadModal() {
    setIsNewLeadModalOpen(true);
  }

  function handleCloseNewLeadModal() {
    setIsNewLeadModalOpen(false);
  }

  useEffect(() => {
    fetch("/api/boards")
      .then((res) => res.json())
      .then((json) => {
        setBoards(json);
      });
  }, [updatedLead]);

  return (
    <div className={styles.boardContainer}>
      <div className={styles.buttonContainer}>
        <button type="button" onClick={handleOpenNewLeadModal}>
          Novo Lead
        </button>
      </div>
      <div className={styles.columnContainer}>
        {boards.map((board) => (
          <Column
            key={board.title}
            data={board}
            boardCallback={boardCallback}
          />
        ))}
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
        <Lead boardCallback={boardCallback} />
      </Modal>
    </div>
  );
}
