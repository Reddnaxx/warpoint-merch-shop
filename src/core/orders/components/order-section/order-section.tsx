"use client";
import {
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MouseEvent, useMemo, useState } from "react";
import { useCartStore } from "@/store/cart/store";
import styles from "./order-section.style.module.scss";
import { TOrderDataSchema } from "@/core/orders/components/data-form/order-data-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type OrderSectionProps = { isValid: boolean; values: TOrderDataSchema | null };

const minDate = dayjs(new Date()).add(1, "day");
const maxDate = dayjs(new Date()).add(7, "day");

const orderFormSchema = z.object({
  address: z.string().min(1),
  date: z.string().min(1),
});

type TOrderFormSchema = z.infer<typeof orderFormSchema>;

function OrderSection({ isValid, values }: OrderSectionProps) {
  const items = useCartStore(state => state.items);
  const sum = useMemo(() => items.reduce((sum, a) => sum + a.cost, 0), [items]);
  const [deliveryType, setDeliveryType] = useState<number>(1);

  const {
    register,
    formState: { isValid: isOrderValid, errors },
    setValue,
    getValues,
  } = useForm<TOrderFormSchema>({
    mode: "onTouched",
    resolver: zodResolver(orderFormSchema),
  });

  const handleDeliveryType = (
    event: MouseEvent<HTMLElement>,
    newDeliveryType: number,
  ) => {
    setDeliveryType(newDeliveryType);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className={styles["order-section"]}>
        <h3>Доставка курьером</h3>
        <div className={styles["order-section__info"]}>
          <TextField variant={"outlined"} label={"Адрес"} fullWidth {...register("address")} />
          <DatePicker
            label={"Дата доставки"}
            minDate={minDate}
            maxDate={maxDate}
            format={"DD/MM/YYYY"}
            sx={{ width: "100%" }}
            onChange={value =>
              setValue("date", value?.toDate().toLocaleDateString() || "")
            }
          />
        </div>
        <h3>
          Оплата картой <span>--8008</span>
        </h3>
        <ToggleButtonGroup
          color={"primary"}
          exclusive
          fullWidth
          value={deliveryType}
          onChange={handleDeliveryType}
          sx={{ paddingInline: "1rem" }}
        >
          <ToggleButton value={1} sx={{ fontSize: "0.75rem" }}>
            При получении
          </ToggleButton>
          <ToggleButton value={2} sx={{ fontSize: "0.75rem" }}>
            Сразу
          </ToggleButton>
        </ToggleButtonGroup>
        <p className={styles["order-section__sum"]}>
          Итого: <span>{sum}₽</span>
        </p>
        <Button
          variant={"contained"}
          color={"primary"}
          fullWidth
          sx={{ borderRadius: "40px", padding: "0.75rem", fontSize: "1.25rem" }}
          disabled={items.length === 0 || !isValid || !values || !isOrderValid}
        >
          Заказать
        </Button>
      </section>
    </LocalizationProvider>
  );
}

export default OrderSection;
