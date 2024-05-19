import React from "react";
import { IItem } from "@/core/catalog/models/item.interface";
import styles from "./history-card.style.module.scss";
import { isValid } from "zod";
import { clsx } from "clsx";
import Link from "next/link";

type HistoryCardProps = {
  item: IItem | null;
  date: string | null;
  status: string | null;
};

function HistoryCard({ item, date, status }: HistoryCardProps) {
  if (!item || !date || !status) {
    return (
      <div
        className={clsx(styles["history-card"], styles["history-card__header"])}
      >
        <h4>Товар</h4>
        <h4>Дата</h4>
        <h4>Статус</h4>
      </div>
    );
  }

  return (
    <div className={styles["history-card"]}>
      <Link href={`/catalog/${item.id}`}>{item.title}</Link>
      <p>{new Date(date).toLocaleDateString("ru-RU")}</p>
      <p>{status}</p>
    </div>
  );
}

export default HistoryCard;
