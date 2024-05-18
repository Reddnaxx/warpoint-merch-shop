import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles["not-found"]}>
      <h2>Страница не найдена(</h2>
      <Link href={"/"}>В безопасное место</Link>
    </main>
  );
}
