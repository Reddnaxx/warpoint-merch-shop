import styles from "./header.style.module.scss";
import Link from "next/link";
import { IconButton } from "@mui/material";
import {
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import NavLink from "./components/nav-link/nav-link";
import MatIconButton from "@/shared/components/mat-icon-button/mat-icon-button";
import HeaderProfile from "@/shared/components/header/components/header-profile/header-profile";
import HeaderCart from "@/shared/components/header/components/header-cart/header-cart";

type HeaderProps = {};

function Header({ ...props }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles["header__title"]}>Warpoint</h1>
      <nav className={styles["header__nav"]}>
        <NavLink href={"/"}>Главная</NavLink>
        <NavLink href={"catalog"}>Каталог</NavLink>
        <NavLink href={"about"}>О компании</NavLink>
      </nav>
      <div className={styles["header__actives"]}>
        <HeaderProfile/>
        <HeaderCart/>
      </div>
    </div>
  );
}

export default Header;
