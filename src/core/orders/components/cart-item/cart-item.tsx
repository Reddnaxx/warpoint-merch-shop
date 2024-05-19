"use client"

import React, { ComponentProps } from "react";
import Image from "next/image";
import { IItem } from "@/core/catalog/models/item.interface";
import styles from "./cart-item.module.scss";
import { Button, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useCartStore } from "@/store/cart/store";

type CartItemProps = { item: IItem, count?: number };

function CartItem({
  item,
  count,
}: CartItemProps) {
  const {addToCart, removeOneFromCart} = useCartStore();

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-item__img"]}>
        <Image src={"/dev/hoodie1.jpg"} alt={""} fill />
      </div>
      <div className={styles["cart-item__content"]}>
        <div className={styles["cart-item__info"]}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className={styles["cart-item__count"]}>
            <IconButton
              sx={{ borderRadius: "4px", border: "1px solid #E23239" }}
              onClick={() => removeOneFromCart(item)}
            >
              <Remove sx={{ fontSize: "1rem" }} />
            </IconButton>
            <span>{count ?? 0}</span>
            <IconButton
              sx={{ borderRadius: "4px", border: "1px solid #E23239" }}
              onClick={() => addToCart(item)}
            >
              <Add sx={{ fontSize: "1rem" }} />
            </IconButton>
          </div>
        </div>
        <div className={styles["cart-item__cost"]}>
          <p>{item.cost}₽</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
