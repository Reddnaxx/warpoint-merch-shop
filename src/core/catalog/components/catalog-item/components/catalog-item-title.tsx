import React, { ReactNode } from "react";
import { Typography } from "@mui/material";
import styles from "../catalog-item.style.module.scss";
import Link from "next/link";

type CatalogItemTitleProps = {
  id: number;
  children: ReactNode;
};

function CatalogItemTitle({ children, id }: CatalogItemTitleProps) {
  return (
    <Link className={styles["title"]} href={`catalog/${id}`}>
      {children}
    </Link>
  );
}

export default CatalogItemTitle;
