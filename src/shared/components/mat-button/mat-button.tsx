"use client";

import { Button, ButtonProps, IconButton, IconButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";

type MatButtonProps = ButtonProps & { href?: string };

function MatButton({ href, onClick, children, ...props }: ButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    if (!href) return;
    router.push(href);
  };

  return (
    <Button
      onClick={e => {
        if (href) handleClick();
        else if (onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default MatButton;
