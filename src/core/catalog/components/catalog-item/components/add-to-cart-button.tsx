"use client";
import { Button, Typography } from "@mui/material";
import { AddShoppingCartOutlined, RemoveShoppingCartOutlined } from "@mui/icons-material";
import { IItem } from "@/core/catalog/models/item.interface";
import { useCartStore } from "@/store/cart/store";

type AddToCartButtonProps = {
  item: IItem;
};

function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addToCart, removeAllFromCart, items } = useCartStore();

  const handleAddToCartClick = () => {
    addToCart(item);
  };

  const handleRemoveFromCartClick = () => {
    removeAllFromCart(item);
  };

  return (
    <>
      {items.some(i => i.id === item.id) ? (
        <Button
          variant={"contained"}
          sx={{
            borderRadius: "40px",
            width: "100%",
            padding: "0.75rem",
            fontSize: "1.25rem",
          }}
          color={"primary"}
          endIcon={<RemoveShoppingCartOutlined sx={{ fontSize: "1.5rem" }} />}
          onClick={handleRemoveFromCartClick}
        >
          Убрать из корзины
        </Button>
      ) : (
        <Button
          variant={"outlined"}
          sx={{
            borderRadius: "40px",
            width: "100%",
            padding: "0.75rem",
            fontSize: "1.25rem",
          }}
          color={"inherit"}
          endIcon={<AddShoppingCartOutlined sx={{ fontSize: "1.5rem" }} />}
          onClick={handleAddToCartClick}
        >
          {item.cost}₽
        </Button>
      )}
    </>
  );
}

export default AddToCartButton;
