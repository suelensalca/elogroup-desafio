import styles from "./lead.module.scss";
import { useForm } from "react-hook-form";
import createServer from "../../services/server";

let server = createServer;

export default function Lead({ data, boardCallback }) {
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    fetch("/api/leads", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/name`,
          json.lead.name
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/phone`,
          json.lead.phone
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/email`,
          json.lead.email
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/rpa`,
          json.lead.rpa
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/digitalproduct`,
          json.lead.digitalproduct
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/analytics`,
          json.lead.analytics
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/bpm`,
          json.lead.bpm
        );
        localStorage.setItem(
          `@elogroup/lead/${json.lead.id}/status`,
          json.lead.status
        );

        boardCallback(json.lead);
      });
  };
  const onError = (errors, e) => {
    console.log(errors, e);
  };
  return (
    <div className={styles.leadContainer}>
      <h1>Novo Lead</h1>
      <form
        className={styles.modalFormContainer}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className={styles.formContainer}>
          <label htmlFor="nomeInput">Nome</label>
          <input
            {...register("name", {
              required: "Nome obrigatório",
            })}
            id="nomeInput"
            type="text"
            placeholder="Nome da empresa"
          />
          <p>{errors.name?.message}</p>
          <label htmlFor="telefoneInput">Telefone</label>
          <input
            {...register("phone", {
              required: "Telefone obrigatório",
            })}
            id="telefoneInput"
            type="number"
            placeholder="(00)0000-0000"
          />
          <p>{errors.phone?.message}</p>
          <label htmlFor="emailInput">Email</label>
          <input
            {...register("email", {
              required: "Email obrigatório",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Inclua um email válido",
              },
              onChange: async (e) => await trigger("email"),
            })}
            id="emailInput"
            type="email"
            className={styles.input}
            placeholder="nome@exemplo.com"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <tbody>
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th>Oportunidades</th>
              </tr>
              <tr>
                <td className={styles.checkbox}>
                  <input {...register("rpa")} type="checkbox"></input>
                </td>
                <td>RPA</td>
              </tr>
              <tr>
                <td className={styles.checkbox}>
                  <input
                    {...register("digitalproduct")}
                    type="checkbox"
                  ></input>
                </td>
                <td>Produto Digital</td>
              </tr>
              <tr>
                <td className={styles.checkbox}>
                  <input {...register("analytics")} type="checkbox"></input>
                </td>
                <td>Analytics</td>
              </tr>
              <tr>
                <td className={styles.checkbox}>
                  <input {...register("bpm")} type="checkbox"></input>
                </td>
                <td>BPM</td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
