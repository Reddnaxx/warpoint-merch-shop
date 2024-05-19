"use client";
import styles from "./new-review.styles.module.scss";
import {
  Button,
  Card,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReviewsService from "@/core/reviews/services/reviews.service";
import { useAuthStore } from "@/store/auth/store";
import Link from "next/link";

type NewReviewProps = {
  itemId: number;
};

function NewReview({ itemId }: NewReviewProps) {
  const [rating, setRating] = useState<number | null>(null);
  const isAuth = useAuthStore(state => state.isAuth);
  const {
    register,
    formState: { isValid, isSubmitting },
    handleSubmit,
    setValue,
    getValues,
  } = useForm({
    mode: "onTouched",
  });

  const handleRating = (
    event: MouseEvent<HTMLElement>,
    newValue: number | null,
  ) => {
    if (newValue === null) return;
    setRating(newValue);
    setValue("rating", newValue);
  };

  const handleSend = async () => {
    if (!rating) return;
    const data = getValues();

    await ReviewsService.create(itemId, {
      text: data.text,
      rating: data.rating,
      userId: 1,
    });
  };

  if (!isAuth)
    return (
      <div>
        <p>
          <Link href={"login"} className={styles["link"]}>
            Войдите в аккаунт
          </Link>
          , чтобы оставить отзыв
        </p>
      </div>
    );

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "#E23239FF",
        borderRadius: "20px",
        padding: "1.5rem 2rem",
        backgroundColor: "rgba(226,50,57,0.1)",
        marginInline: "25%",
      }}
      className={styles["new-review"]}
    >
      <h4>Поделитесь мнением</h4>
      <textarea
        rows={8}
        className={styles["new-review__text"]}
        placeholder={"Напишите что вы думаете о товаре"}
        {...register("text", {
          required: true,
        })}
      />
      <form
        className={styles["new-review__actions"]}
        onSubmit={handleSubmit(handleSend)}
      >
        <ToggleButtonGroup
          value={rating}
          exclusive
          onChange={handleRating}
          aria-label="rating review"
        >
          <ToggleButton value={1} aria-label="like" color={"success"}>
            <ThumbUpOutlined />
          </ToggleButton>
          <ToggleButton value={-1} aria-label="dislike" color={"primary"}>
            <ThumbDownOutlined />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant={"outlined"}
          sx={{ borderRadius: "30px", fontSize: "1.25rem" }}
          color={"inherit"}
          disabled={!isValid || !rating || isSubmitting}
          type={"submit"}
        >
          Отправить
        </Button>
      </form>
    </Card>
  );
}

export default NewReview;
