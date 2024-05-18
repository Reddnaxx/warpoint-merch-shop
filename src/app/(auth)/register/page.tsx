import styles from "./page.module.scss";
import { Metadata } from "next";
import RegisterForm from "@/core/auth/components/register-form/register-form";

export const metadata: Metadata = {
  title: "Регистрация | Магазин мерча Warpoint",
};

type RegisterPageProps = {};

export default function RegisterPage({}: RegisterPageProps) {
  return (
    <main className={styles["register"]}>
      <RegisterForm />
    </main>
  );
}
