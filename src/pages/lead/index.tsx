import styles from "./lead.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../services/server";
import React from "react";

let server = api;

interface LeadProps {
  boardCallback: (item: any) => void;
}

type FormValues = {
  id: number;
  status: number;
  name: string;
  phone: string;
  email: string;
  rpa: boolean;
  digitalproduct: boolean;
  analytics: boolean;
  bpm: boolean;
};

export default function Lead({ boardCallback }: LeadProps) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
        localStorage.setItem(`@elogroup/lead/${json.lead.id}/id`, json.lead.id);
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
        alert("Lead incluído com sucesso!");
        boardCallback(json.lead);
      });
  };

  function checkAll(e: React.BaseSyntheticEvent) {
    let inputs = document.getElementsByTagName("input");
    if (e.target.checked) {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
          inputs[i].checked = true;
        }
      }
    } else {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
          inputs[i].checked = false;
        }
      }
    }
  }
  return (
    <div className={styles.leadContainer}>
      <h1>Novo Lead</h1>
      <form
        className={styles.modalFormContainer}
        onSubmit={handleSubmit(onSubmit)}
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
                  <input onChange={checkAll} type="checkbox"></input>
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
