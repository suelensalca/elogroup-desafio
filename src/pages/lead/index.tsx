import styles from './lead.module.scss'

export default function Lead() {
    return (
        <div className={styles.leadContainer}>
                <h1>Novo Lead</h1>
            <form className={styles.formContainer}>
                <label htmlFor="nomeInput">Nome</label>
                <input
                    id="nomeInput"
                    type="text"
                    placeholder="Nome completo"
                />
                <label htmlFor="telefoneInput">Telefone</label>
                <input
                    id="telefoneInput"
                    type="number"
                    placeholder="(00)0000-0000"
                />
                <label htmlFor="emailValidation">Email</label>
                <input
                    id="emailValidation"
                    type="email"
                    placeholder="nome@exemplo.com"
                />
            </form>
            <div className={styles.tableContainer}>
                <table>
                    <tr>
                        <th><input type="checkbox"></input></th>
                        <th>Oportunidades</th>
                    </tr>
                    <tr>
                        <td className={styles.checkbox}><input type="checkbox"></input></td>
                        <td>RPA</td>
                    </tr>
                    <tr>
                        <td className={styles.checkbox}><input type="checkbox"></input></td>
                        <td>Produto Digital</td>
                    </tr>
                    <tr>
                        <td className={styles.checkbox}><input type="checkbox"></input></td>
                        <td>Analytics</td>
                    </tr>
                    <tr>
                        <td className={styles.checkbox}><input type="checkbox"></input></td>
                        <td>BPM</td>
                    </tr>
                </table>
                <button
                    type="submit"
                >
                    Salvar
                </button>
            </div>
        </div>
    )
}