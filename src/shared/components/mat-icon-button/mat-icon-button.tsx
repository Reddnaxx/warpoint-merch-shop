"use client";

import { IconButton, IconButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";

type MatIconButtonProps = IconButtonProps & { href?: string };

function MatIconButton({
  href,
  onClick,
  children,
  ...props
}: MatIconButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    if (!href) return;
    router.push(href);
  };

  return (
    <IconButton
      onClick={e => {
        if (href) handleClick();
        else if (onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
}

export default MatIconButton;
