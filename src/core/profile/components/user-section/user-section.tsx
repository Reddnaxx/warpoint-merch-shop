"use client";

import { Button, TextField } from "@mui/material";
import styles from "./user-section.style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TUserDataSchema,
  userDataSchema,
} from "../../schemas/user-data.schema";
import { IUser } from "@/core/auth/models/user.interface";

type UserSectionProps = {
  user: IUser;
};

function UserSection({ user }: UserSectionProps) {
  const {
    register,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm<TUserDataSchema>({
    mode: "onChange",
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      address: user.address,
      email: user.email,
      name: user.fullName,
      birthDate: user.birthday,
      phoneNumber: user.phoneNumber,
    },
  });

  const handleSave = (data: TUserDataSchema) => {};

  return (
    <section className={styles["user-section"]}>
      <h2>Личные данные</h2>
      <form
        className={styles["user-section__form"]}
        onSubmit={handleSubmit(handleSave)}
      >
        <TextField
          variant={"outlined"}
          label={"Имя"}
          {...register("name")}
        />
        <TextField
          variant={"outlined"}
          label={"Почта"}
          {...register("email")}
        />
        <TextField
          variant={"outlined"}
          label={"День рождения"}
          {...register("birthDate")}
        />
        <TextField
          variant={"outlined"}
          label={"Номер телефона"}
          {...register("phoneNumber")}
        />
        <TextField
          variant={"outlined"}
          label={"Адрес"}
          {...register("address")}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          sx={{ borderRadius: "30px" }}
          type={"submit"}
          disabled={!isValid || isSubmitting}
        >
          Сохранить
        </Button>
      </form>
    </section>
  );
}

export default UserSection;
