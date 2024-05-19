"use client";
import styles from "./item-page-item-section.style.module.scss";
import Image from "next/image";
import {
  AddShoppingCartOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { IItem } from "@/core/catalog/models/item.interface";
import { useAuthStore } from "@/store/auth/store";
import { useCartStore } from "@/store/cart/store";

type ItemPageItemSectionProps = {
  item: IItem;
};

function ItemPageItemSection({ item }: ItemPageItemSectionProps) {
  const { addToCart, removeAllFromCart, items } = useCartStore();

  return (
    <section className={styles["item-section"]}>
      <div className={styles["item-section__item"]}>
        <div className={styles["item-section__img"]}>
          <Image src={item.image} alt={""} fill />
        </div>
        <div className={styles["item-section__info"]}>
          <h2>{item.title}</h2>
          <div className={styles["item-section__rating-container"]}>
            <Star sx={{ fontSize: "1rem" }} color={"warning"} />
            <p className={styles["item-section__rating"]}>
              Рейтинг: {item.rating}
            </p>
          </div>
          <p className={styles["item-section__desc"]}>{item.description}</p>
        </div>
      </div>
      <div className={styles["item-section__actions"]}>
        {items.some(i => i.id === item.id) ? (
          <Button
            variant={"contained"}
            color={"primary"}
            sx={{
              borderRadius: "50px",
              fontSize: "1.25rem",
              fontWeight: "bold",
              padding: "1rem",
            }}
            fullWidth
            endIcon={<RemoveShoppingCartOutlined sx={{ fontSize: "3rem" }} />}
            onClick={() => removeAllFromCart(item)}
          >
            Убрать из корзины
          </Button>
        ) : (
          <Button
            variant={"outlined"}
            color={"inherit"}
            sx={{
              borderRadius: "50px",
              fontSize: "1.25rem",
              fontWeight: "bold",
              padding: "1rem",
            }}
            fullWidth
            endIcon={<AddShoppingCartOutlined sx={{ fontSize: "3rem" }} />}
            onClick={() => addToCart(item)}
          >
            {item.cost}₽
          </Button>
        )}
        <p>Доставим завтра</p>
      </div>
    </section>
  );
}

export default ItemPageItemSection;
