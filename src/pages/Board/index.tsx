import Column from './components/Column'
import styles from './board.module.scss'

export default function Board() {
    return (
        <div className={styles.boardContainer}>
            <div className={styles.buttonContainer}>
                <button
                    type="button"
                >
                    Novo Lead
                </button>
            </div>
            <div className ={styles.columnContainer}>
                <Column />
                <Column />
                <Column />
            </div>
        </div>
    )
}