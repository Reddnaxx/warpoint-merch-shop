import styles from "./page.module.scss";
import { Metadata } from "next";
import UserSection from "@/core/profile/components/user-section/user-section";
import { useAuthStore } from "@/store/auth/store";
import HistorySection from "@/core/profile/components/history-section/history-section";

type ProfilePageProps = {};

export const metadata: Metadata = {
  title: "Профиль | Магазин мерча Warpoint"
}

export default function ProfilePage({}: ProfilePageProps) {
  const {user} = useAuthStore.getState();

  return <main className={styles["profile-page"]}>
    <UserSection user={user!}/>
    <HistorySection/>
  </main>;
}
