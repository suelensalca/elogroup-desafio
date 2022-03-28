import Card from "../Card";
import styles from "./column.module.scss";

export default function Column({ data }) {
  return (
    <div className={styles.columnContainer}>
      <header className={styles.title}>
        <h3>{data.title}</h3>
      </header>
      <ul>
        {data.leads.map((lead) => (
          <Card key={lead.id} data={lead} />
        ))}
      </ul>
    </div>
  );
}
