import Card from "../Card";
import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import styles from "./column.module.scss";

interface boardModel {
  id: number;
  title: string;
  status: number;
}

interface leadModel {
  id: number;
  status: number;
  name: string;
}

interface columnProps {
  data: boardModel;
  boardCallback: (item: any) => void;
}

export default function Column({ data, boardCallback }: columnProps) {
  let [leads, setLeads] = useState<leadModel[]>([]);

  useEffect(() => {
    fetch(`/api/leads/${data.status}`)
      .then((res) => res.json())
      .then((json) => {
        setLeads(json.leads ?? []);
      });
  }, [data]);

  const [, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item: boardModel) => moveCard(item, data),
  }));

  const moveCard = (item: boardModel, data: boardModel) => {
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
