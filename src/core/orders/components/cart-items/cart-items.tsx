"use client";

import { useCartStore } from "@/store/cart/store";
import { declOfNum } from "@/shared/helpers/decl-of-num";
import CartItem from "@/core/orders/components/cart-item/cart-item";
import styles from "./cart-items.module.scss";
import { useMemo } from "react";

type CartItemsProps = {};

function CartItems({ ...props }: CartItemsProps) {
  const items = useCartStore(state => state.items);
  const uniqueItems = useMemo(() => {
    const uniqueIds: number[] = [];

    return items.filter(element => {
      const isDuplicate = uniqueIds.includes(element.id);
      if (!isDuplicate) {
        uniqueIds.push(element.id);
        return true;
      }

      return false;
    });
  }, [items]);
  return (
    <div className={styles["cart-items"]}>
      <div className={styles["top"]}>
        <h2>Корзина</h2>
        <p>
          {items.length +
            " " +
            declOfNum(items.length, ["товар", "товара", "товаров"])}
        </p>
      </div>
      {uniqueItems.length > 0 ? (
        <ul className={styles["cart-items__list"]}>
          {uniqueItems.map((item, index) => {
            return (
              <li key={index}>
                <CartItem
                  item={item}
                  count={items.filter(i => i.id === item.id).length}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles["cart-items__empty"]}>Пусто</p>
      )}
    </div>
  );
}

export default CartItems;
