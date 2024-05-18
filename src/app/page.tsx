import { clsx } from "clsx";
import { Button } from "@mui/material";
import styles from "./page.module.scss";
import MatButton from "@/shared/components/mat-button/mat-button";
import Head from "next/head";
import React from "react";

export default function HomePage() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles["home__cat"]}></div>
        <div className={styles["home__headings"]}>
          <h3
            className={clsx(
              styles["home__heading"],
              styles["home__heading-first"],
            )}
          >
            Интернет магазин
          </h3>
          <h2 className={styles["home__heading"]}>Warpoint</h2>
        </div>
        <MatButton
          sx={{ fontSize: "1.25rem", borderRadius: 40, padding: "24px 120px" }}
          color={"inherit"}
          variant={"outlined"}
          href={"catalog"}
        >
          В каталог
        </MatButton>
        <p className={styles["home__footnote"]}>
          *продажа мерчендайза и атрибутики
        </p>
      </main>
    </>
  );
}
