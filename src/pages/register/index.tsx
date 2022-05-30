import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./register.module.scss";

type FormValues = {
  id: number;
  email: string;
  password: string;
  passwordValidation: string;
};

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem(`@elogroup/user/${json.user.id}/id`, json.user.id);
        localStorage.setItem(
          `@elogroup/user/${json.user.id}/email`,
          json.user.email
        );
        localStorage.setItem(
          `@elogroup/user/${json.user.id}/password`,
          json.user.password
        );

        router.push("/board");
      });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="emailInput" className={styles.label}>
          Usuário
        </label>
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
        <label htmlFor="passwordInput" className={styles.label}>
          Senha
        </label>
        <input
          {...register("password", {
            required: "Senha obrigatória",
            minLength: { value: 8, message: "mínimo 8 caracteres" },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                "Inclua ao menos uma letra, um número e um caracter especial",
            },
            onChange: async (e) => await trigger("password"),
          })}
          id="passwordInput"
          type="password"
          className={styles.input}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>
        <label htmlFor="passwordValidation" className={styles.label}>
          Confirmação de Senha
        </label>
        <input
          {...register("passwordValidation", {
            required: "Campo obrigatório",
            validate: (value) =>
              value === getValues("password") ||
              "Digite a mesma senha nos dois campos",
          })}
          id="passwordValidation"
          type="password"
          className={styles.input}
          placeholder="password"
        />
        <p>{errors.passwordValidation?.message}</p>
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
