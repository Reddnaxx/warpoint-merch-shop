"use client";

import { Badge, IconButton } from "@mui/material";
import { MouseEvent } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import MatIconButton from "@/shared/components/mat-icon-button/mat-icon-button";
import { useCartStore } from "@/store/cart/store";
import { usePathname } from "next/navigation";

function HeaderCart() {
  const items = useCartStore(state => state.items);
  const pathname = usePathname();

  return (
    <div>
      <MatIconButton href={"/cart"}>
        <Badge badgeContent={items.length} color={"primary"}>
          <ShoppingCartOutlined
            sx={{ fontSize: "2rem" }}
            color={pathname === "/cart" ? "primary" : "inherit"}
          />
        </Badge>
      </MatIconButton>
    </div>
  );
}

export default HeaderCart;
