import styles from "./card.module.scss";
import { useDrag } from "react-dnd";
import LeadModel from "../../../../models/lead.model";

interface cardProps {
  data: LeadModel;
}

export default function Card({ data }: cardProps) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <li
      className={
        isDragging
          ? [styles.cardContainer, styles.cardDragging].join(" ")
          : styles.cardContainer
      }
      ref={dragRef}
    >
      <p className={styles.cardTitle}>{data.name}</p>
    </li>
  );
}
