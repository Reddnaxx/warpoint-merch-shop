"use client";

import { Badge, IconButton } from "@mui/material";
import { MouseEvent } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import MatIconButton from "@/shared/components/mat-icon-button/mat-icon-button";
import { useCartStore } from "@/store/cart/store";

type HeaderCartProps = {};

function HeaderCart({ ...props }: HeaderCartProps) {
  const items = useCartStore(state => state.items);

  return (
    <div>
      <MatIconButton href={"cart"}>
        <Badge badgeContent={items.length} color={"primary"}>
          <ShoppingCartOutlined sx={{ fontSize: "2rem" }} />
        </Badge>
      </MatIconButton>
    </div>
  );
}

export default HeaderCart;
