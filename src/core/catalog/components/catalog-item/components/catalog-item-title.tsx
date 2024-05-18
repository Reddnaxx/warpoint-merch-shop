import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

type CatalogItemTitleProps = {
  children: ReactNode;
};

function CatalogItemTitle({ children }: CatalogItemTitleProps) {
  return (
    <Typography component={"h2"} fontSize={"1.25rem"} fontWeight={"bold"}>
      {children}
    </Typography>
  );
}

export default CatalogItemTitle;