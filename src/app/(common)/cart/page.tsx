"use client";

import { Metadata } from "next";
import styles from "./page.module.scss";
import CartItems from "@/core/orders/components/cart-items/cart-items";
import OrderSection from "@/core/orders/components/order-section/order-section";
import { Card, Link } from "@mui/material";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import OrderDataForm, {
  TOrderDataSchema,
} from "@/core/orders/components/data-form/order-data-form";
import Head from "next/head";
import { useState } from "react";

type CartPageProps = {};

export default function CartPage({}: CartPageProps) {
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState<TOrderDataSchema | null>(null);

  return (
    <main className={styles["cart"]}>
      <Head>
        <title>Корзина | Магазин мерча Warpoint</title>
      </Head>
      <div className={styles["cart__cat"]}/>
      <section>
        <CartItems />
      </section>
      <OrderSection isValid={isValid} values={values} />
      <div className={styles["cart__bottom"]}>
        <section>
          <h2>Способ оплаты</h2>
          <Card
            variant={"outlined"}
            sx={{
              borderColor: "#E23239FF",
              background: "none",
              display: "flex",
              gap: "1rem",
              padding: "1rem 2rem",
              borderRadius: "10px",
            }}
          >
            <Image
              src={"/icons/credit_card_1.svg"}
              alt={""}
              width={30}
              height={20}
            />
            <p className={styles["cart__card"]}>SberPay --8008</p>
          </Card>
          <Card
            variant={"outlined"}
            sx={{
              borderColor: "#E23239FF",
              background: "none",
              display: "flex",
              gap: "1rem",
              padding: "1rem 2rem",
              borderRadius: "10px",
              opacity: 0.5,
            }}
          >
            <Image
              src={"/icons/credit_card_2.svg"}
              alt={""}
              width={30}
              height={20}
            />
            <p className={styles["cart__card"]}>Tinkoff --5676</p>
          </Card>
          <Card
            variant={"outlined"}
            sx={{
              borderColor: "#E23239FF",
              background: "none",
              display: "flex",
              gap: "1rem",
              padding: "1rem 2rem",
              borderRadius: "10px",
            }}
          >
            <Image
              src={"/icons/credit_card_empty.svg"}
              alt={""}
              width={30}
              height={20}
            />
            <p className={styles["cart__card"]}>Добавить новую карту</p>
            <Add sx={{ marginLeft: "auto" }} />
          </Card>
        </section>
      </div>
      <section className={styles["cart__data"]}>
        <h2>Мои данные</h2>
        <OrderDataForm
          onChange={(value, valid) => {
            setIsValid(valid);
            setValues(value);
          }}
        />
        <Link href={"login"}>Войдите в аккаунт для автозаполнения</Link>
      </section>
    </main>
  );
}
