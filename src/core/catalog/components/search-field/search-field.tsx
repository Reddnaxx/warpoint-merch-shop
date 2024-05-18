"use client";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useState } from "react";

type SearchFieldProps = TextFieldProps & {};

function SearchField({ label, focused, color, ...props }: SearchFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      color={color ?? "primary"}
      label={label ?? "Поиск"}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlined
              sx={{ fontSize: "2rem" }}
              color={isFocused ? "primary" : "inherit"}
            />
          </InputAdornment>
        ),
        sx: {
          borderRadius: "30px",
          minWidth: "30dvw",
          backgroundColor: "rgba(0,0,0,0.1)",
          backdropFilter: "blur(15px)",
        },
      }}
      {...props}
    />
  );
}

export default SearchField;
