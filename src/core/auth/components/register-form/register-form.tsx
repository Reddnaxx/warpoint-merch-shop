"use client";

import { Button, Card, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TRegisterFormSchema,
  registerFormSchema,
} from "../../schemas/register-form.schema";
import styles from "./register-form.style.module.scss";
import Link from "next/link";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuthStore } from "@/store/auth/store";

type RegisterFormProps = {};

function RegisterForm({ ...props }: RegisterFormProps) {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    setValue,
    getValues,
    handleSubmit,
  } = useForm<TRegisterFormSchema>({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema),
  });

  const registerUser = useAuthStore(state => state.register);

  const handleRegister = async (data: TRegisterFormSchema) => {
    await registerUser({
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      fullName: data.fullName,
      password: data.password,
      birthday: data.birthday,
      role: "user",
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card
        component={"form"}
        sx={{ backgroundColor: "rgba(255,255,255,0.01)", minWidth: "25dvw" }}
        className={styles["register-form"]}
        onSubmit={handleSubmit(handleRegister)}
      >
        <h2>Регистрация</h2>
        <TextField
          label="Почта"
          required
          type={"email"}
          error={!!errors.email}
          helperText={errors.email?.message}
          inputProps={{
            sx: { fontSize: "1.25rem" },
          }}
          {...register("email")}
        />
        <TextField
          label="Имя"
          required
          type={"text"}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          inputProps={{
            sx: { fontSize: "1.25rem" },
          }}
          {...register("fullName")}
        />
        <DatePicker
          label="День рождения"
          sx={{ fontSize: "1.25rem" }}
          format={"YYYY.MM.DD"}
          onChange={value =>
            setValue("birthday", value?.toISOString().substring(0, 10) ?? "")
          }
        />
        <TextField
          label="Адрес"
          type={"text"}
          error={!!errors.address}
          helperText={errors.address?.message}
          inputProps={{
            sx: { fontSize: "1.25rem" },
          }}
          {...register("address")}
        />
        <TextField
          label="Телефон"
          type={"tel"}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          inputProps={{
            sx: { fontSize: "1.25rem" },
          }}
          {...register("phoneNumber")}
        />
        <TextField
          label="Пароль"
          required
          type={"password"}
          InputProps={{
            sx: { fontSize: "1.25rem" },
          }}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <TextField
          label="Повторите пароль"
          required
          type={"password"}
          InputProps={{
            sx: { fontSize: "1.25rem" },
          }}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          sx={{ fontSize: "1.25rem", color: "#ffffff" }}
          disabled={isSubmitting || !isValid}
          type={"submit"}
        >
          Зарегистрироваться
        </Button>
        <div className={styles["register-form__has-acc"]}>
          <p>Уже есть аккаунт?</p>
          <Link href={"login"}>Войти</Link>
        </div>
      </Card>
    </LocalizationProvider>
  );
}

export default RegisterForm;
