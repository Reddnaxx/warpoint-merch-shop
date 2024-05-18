import { Metadata } from "next";
import LoginForm from "@/core/auth/components/login-form/login-form";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Вход | Магазин мерча Warpoint"
}

type LoginPageProps = {};

export default function LoginPage({}: LoginPageProps) {
  return <main className={styles["login"]}>
    <LoginForm/>
  </main>;
}
