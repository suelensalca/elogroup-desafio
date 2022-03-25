import styles from './register.module.scss'

export default function Register() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label for="emailInput" className={styles.label}>Usuário</label>
                <input
                    id="emailInput"
                    type="email"
                    className={styles.input}
                    placeholder="name@example.com"
                />
                <label for="passwordInput" className={styles.label}>Senha</label>
                <input
                    id="passwordInput"
                    type="password"
                    className={styles.input}
                    placeholder="password"
                />
                <label for="passwordValidation" className={styles.label}>Confirmação de Senha</label>
                <input
                    id="passwordValidation"
                    type="password"
                    className={styles.input}
                    placeholder="password"
                />
                <button
                    type="submit"
                    className={styles.button}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}