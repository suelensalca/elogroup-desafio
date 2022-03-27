import styles from './register.module.scss'

import { useRouter } from 'next/router'

export default function Register() {
    const router = useRouter()

    function handleRegister(e) {
        e.preventDefault()
        router.push('/board')
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label htmlFor="emailInput" className={styles.label}>Usuário</label>
                <input
                    id="emailInput"
                    type="email"
                    className={styles.input}
                    placeholder="nome@exemplo.com"
                />
                <label htmlFor="passwordInput" className={styles.label}>Senha</label>
                <input
                    id="passwordInput"
                    type="password"
                    className={styles.input}
                    placeholder="password"
                />
                <label htmlFor="passwordValidation" className={styles.label}>Confirmação de Senha</label>
                <input
                    id="passwordValidation"
                    type="password"
                    className={styles.input}
                    placeholder="password"
                />
                <button
                    type="submit"
                    className={styles.button}
                    onClick={handleRegister}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}