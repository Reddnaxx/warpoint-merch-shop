"use client";

import { Button, Card, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TRegisterFormSchema,
  registerFormSchema,
} from "@/core/auth/schemas/register-form.schema";
import styles from "./register-form.style.module.scss";
import Link from "next/link";

type RegisterFormProps = {};

function RegisterForm({ ...props }: RegisterFormProps) {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TRegisterFormSchema>({
    mode: "onTouched",
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <Card
      component={"form"}
      sx={{ backgroundColor: "rgba(255,255,255,0.01)" }}
      className={styles["register-form"]}
    >
      <h2>Регистрация</h2>
      <TextField
        label="Почта"
        type={"email"}
        error={!!errors.email}
        helperText={errors.email?.message}
        inputProps={{
          sx: { fontSize: "1.25rem" },
        }}
        {...register("email")}
      />
      <TextField
        label="Пароль"
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
        color={"success"}
        sx={{ fontSize: "1.25rem", color: "#ffffff" }}
        disabled={isSubmitting || !isValid}
      >
        Зарегистрироваться
      </Button>
      <div className={styles["register-form__has-acc"]}>
        <p>Уже есть аккаунт?</p>
        <Link href={"login"}>Войти</Link>
      </div>
    </Card>
  );
}

export default RegisterForm;
