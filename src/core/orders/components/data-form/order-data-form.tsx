"use client";
import { Link, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./order-data-form.styles.module.scss";

type OrderDataFormProps = {
  onChange: (values: TOrderDataSchema, isValid: boolean) => void;
};

const orderDataSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(10).max(11),
});

export type TOrderDataSchema = z.infer<typeof orderDataSchema>;

function OrderDataForm({ onChange }: OrderDataFormProps) {
  const {
    register,
    getValues,
    formState: { isValid, errors },
  } = useForm<TOrderDataSchema>({
    mode: "onTouched",
    resolver: zodResolver(orderDataSchema),
  });

  return (
    <form className={styles["order-data-form"]}>
      <TextField
        label={"Имя"}
        variant={"filled"}
        fullWidth
        error={!!errors.name}
        {...register("name", {
          onChange: () => onChange(getValues(), isValid),
        })}
      />
      <TextField
        label={"Телефон"}
        variant={"filled"}
        fullWidth
        error={!!errors.phone}
        {...register("phone", {
          onChange: () => onChange(getValues(), isValid),
        })}
      />
    </form>
  );
}

export default OrderDataForm;
