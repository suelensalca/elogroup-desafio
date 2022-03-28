import Column from "./components/Column";
import styles from "./board.module.scss";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Lead from "../lead";
import createServer from "../../services/server";

Modal.setAppElement("body");

export default function Board() {
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  let [leads, setLeads] = useState([]);
  let server = createServer;

  function handleOpenNewLeadModal() {
    setIsNewLeadModalOpen(true);
  }

  function handleCloseNewLeadModal() {
    setIsNewLeadModalOpen(false);
  }

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((json) => {
        setLeads(json);
      });
  }, []);

  return (
    <div className={styles.boardContainer}>
      <div className={styles.buttonContainer}>
        <button type="button" onClick={handleOpenNewLeadModal}>
          Novo Lead
        </button>
      </div>
      <div className={styles.columnContainer}>
        {leads.map((lead) => (
          <Column key={lead.title} data={lead} />
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
        <Lead />
      </Modal>
    </div>
  );
}
