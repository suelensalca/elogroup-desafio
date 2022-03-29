import Card from "../Card";
import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import styles from "./column.module.scss";

export default function Column({ data, boardCallback }) {
  let [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch(`/api/leads/${data.status}`)
      .then((res) => res.json())
      .then((json) => {
        setLeads(json.leads ?? []);
      });
  }, [data]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => moveCard(item, data),
  }));

  const moveCard = (item, data) => {
    let currentStatus = item.status;
    let nextStatus = data.status;

    if (nextStatus - currentStatus !== 1) {
      return;
    }

    fetch(`/api/leads/${item.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: nextStatus }),
    })
      .then((res) => res.json())
      .then((json) => {
        boardCallback(json);
      });
  };

  return (
    <div className={styles.columnContainer} ref={dropRef}>
      <header className={styles.title}>
        <h3>{data.title}</h3>
      </header>
      <ul>
        {leads.map((lead) => (
          <Card key={lead.id} data={lead} />
        ))}
      </ul>
    </div>
  );
}
