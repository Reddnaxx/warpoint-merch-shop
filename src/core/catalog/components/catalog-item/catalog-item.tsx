import { Card, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import AddToCartButton from "./components/add-to-cart-button";
import CatalogItemTitle from "./components/catalog-item-title";
import styles from "./catalog-item.style.module.scss";

type CatalogItemProps = {
  imageSrc: string;
  width?: number;
  children?: ReactNode;
};

function CatalogItem({ imageSrc, width, children }: CatalogItemProps) {
  return (
    <Card
      variant={"outlined"}
      sx={{
        borderColor: "#E23239",
        borderRadius: "40px 40px 4px 4px",
        background: "none",
      }}
    >
      <CardMedia
        sx={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}
      >
        <Image src={imageSrc} alt={""} fill />
      </CardMedia>
      <CardContent
        sx={{
          background:
            "radial-gradient(circle at left top, #E23239 0%, transparent 65%);",
          backdropFilter: "blur(40px)",
          padding: "1.5rem",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}

CatalogItem.AddToCartButton = AddToCartButton;
CatalogItem.Title = CatalogItemTitle;

export default CatalogItem;
