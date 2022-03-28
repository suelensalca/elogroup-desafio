import styles from "./card.module.scss";

export default function Card({ data }) {
  return (
    <li className={styles.cardContainer}>
      <p className={styles.cardTitle}>{data.name}</p>
    </li>
  );
}
