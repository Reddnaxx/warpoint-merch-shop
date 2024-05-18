"use client";

import {
  AccountCircleOutlined,
  LogoutOutlined,
  Person,
  VerifiedUser,
} from "@mui/icons-material";
import MatIconButton from "@/shared/components/mat-icon-button/mat-icon-button";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

type HeaderProfileProps = {};

function HeaderProfile({ ...props }: HeaderProfileProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();

  const handleProfileClick = () => {
    close();
    router.push("profile");
  };

  const handleLogoutClick = () => {
    close();
  };

  const close = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MatIconButton
        id="profile-button"
        aria-label="profile"
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleOutlined sx={{ fontSize: "3rem" }} />
      </MatIconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        MenuListProps={{
          "aria-labelledby": "profile-button",
        }}
      >
        <MenuItem onClick={handleProfileClick}>
          <Person sx={{ fontSize: "1.5rem", marginRight: "0.5rem" }} /> Профиль
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <LogoutOutlined sx={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />{" "}
          Выйти
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderProfile;
