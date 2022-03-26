import styles from './card.module.scss'

export default function Card() {
    return (
        <li className={styles.cardContainer}>
            <p className={styles.cardTitle}>Dados aqui</p>
        </li>

    )
}