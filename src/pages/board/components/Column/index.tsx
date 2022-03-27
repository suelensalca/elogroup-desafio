import Card from '../Card'
import styles from './column.module.scss'

export default function Column() {
    return (
        <div className={styles.columnContainer}>
            <header className={styles.title}>
                <h3>Cliente em Potencial</h3>
            </header>
            <ul>
                <Card />
                <Card />
                <Card />
            </ul>
        </div>
    )
}