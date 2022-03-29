import styles from "./card.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import Lead from "../../../lead";

export default function Card({ data }) {
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
