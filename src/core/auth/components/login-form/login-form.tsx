"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, IconButton, TextField } from "@mui/material";
import styles from "./login-form.style.module.scss";
import { MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { TLoginFormSchema, loginFormSchema } from "@/core/auth/schemas/login-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useAuthStore } from "@/store/auth/store";
import { useRouter } from "next/navigation";

type LoginFormProps = {};

function LoginForm({ ...props }: LoginFormProps) {
  const login = useAuthStore(state => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit
  } = useForm<TLoginFormSchema>({
    mode: "onTouched",
    resolver: zodResolver(loginFormSchema),
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = async (data: TLoginFormSchema) => {
    await login(data.email, data.password).then(() => {
      router.replace("/");
    });
  }

  return (
    <Card
      component={"form"}
      sx={{ backgroundColor: "rgba(255,255,255,0.01)" }}
      className={styles["login-form"]}
      onSubmit={handleSubmit(handleLogin)}
    >
      <h2>Вход</h2>
      <TextField
        label="Почта"
        type={"email"}
        inputProps={{
          sx: { fontSize: "1.25rem" },
        }}
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />
      <TextField
        label="Пароль"
        type={!showPassword ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
          sx: { fontSize: "1.25rem" },
        }}
        {...register("password")}
      />
      <Button
        variant={"contained"}
        color={"primary"}
        sx={{ fontSize: "1.25rem", color: "#ffffff" }}
        disabled={isSubmitting || !isValid}
        type={"submit"}
      >
        Войти
      </Button>
      <div className={styles["login-form__no-acc"]}>
        <p>Нет аккаунта?</p>
        <Link href={"register"}>Зарегистрироваться</Link>
      </div>
    </Card>
  );
}

export default LoginForm;
