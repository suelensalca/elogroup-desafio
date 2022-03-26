import styles from './lead.module.scss'

export default function Lead() {
    return (
        <div className={styles.leadContainer}>
            <form className={styles.formContainer}>
                <label for="nomeInput">Nome</label>
                <input
                    id="nomeInput"
                    type="text"
                    placeholder="Nome completo"
                />
                <label for="telefoneInput">Telefone</label>
                <input
                    id="telefoneInput"
                    type="number"
                    placeholder="(00)0000-0000"
                />
                <label for="emailValidation">Email</label>
                <input
                    id="emailValidation"
                    type="email"
                    placeholder="nome@exemplo.com"
                />
            </form>
            <div className={styles.tableContainer}>
                <table>
                    <caption>Oportunidades</caption>
                    <tr>
                        <th><input type="checkbox"></input></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>RPA</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>Produto Digital</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>Analytics</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
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