import React, { ReactNode } from "react";
import styles from "@/app/(common)/catalog/page.module.scss";
import SearchField from "@/core/catalog/components/search-field/search-field";

export default function CatalogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className={styles["catalog__top"]}>
        <SearchField />
      </div>
      {children}
    </>
  );
}
