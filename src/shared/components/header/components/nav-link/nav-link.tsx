"use client";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "./nav-link.style.module.scss";
import { ComponentProps } from "react";
import { usePathname, useRouter } from "next/navigation";

type NavLinkProps = ComponentProps<typeof Link> & {};

function NavLink({ href, className, children, ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(styles["nav-link"], className, {
        [styles["nav-link_active"]]:
          pathname?.substring(1) === href ||
          pathname === href ||
          (pathname?.startsWith(`/${href.toString()}`) && href !== "/"),
      })}
    >
      {children}
    </Link>
  );
}

export default NavLink;
