import Card from "../Card";
import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import styles from "./column.module.scss";

export default function Column({ data, dropCallback }) {
  let [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch(`/api/leads/${data.status}`)
      .then((res) => res.json())
      .then((json) => {
        setLeads(json.leads ?? []);
      });
  }, []);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => moveCard(item, data),
  }));

  const moveCard = (item, data) => {
    let currentStatus = item.status;
    let nextStatus = data.status;

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
        dropCallback(json);
      });
  };

  return (
    <div className={styles.columnContainer}>
      <header className={styles.title}>
        <h3>{data.title}</h3>
      </header>
      <ul ref={dropRef}>
        {leads.map((lead) => (
          <Card key={lead.id} data={lead} />
        ))}
      </ul>
    </div>
  );
}
