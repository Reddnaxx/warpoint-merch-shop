import React from "react";
import { IReview } from "@/core/reviews/models/review.interface";
import { Card } from "@mui/material";
import { AccountCircleRounded, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import styles from "./review-card.style.module.scss";

type ReviewCardProps = IReview & {};

function ReviewCard({ id, text, rating, userFullName }: ReviewCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "#E23239FF",
        borderRadius: "20px",
        padding: "1.5rem 2rem",
        paddingBottom: "3.5rem",
        backgroundColor: "rgba(226,50,57,0.1)",
      }}
      className={styles["review-card"]}
    >
      <div className={styles["review-card__info"]}>
        <div className={styles["review-card__user"]}>
          <AccountCircleRounded sx={{fontSize: "3.5rem"}} color={"primary"}/>
          <h4>{userFullName}</h4>
        </div>
        {rating > 0 ? (
          <ThumbUpOutlined sx={{ fontSize: "1.25rem" }} color={"success"} />
        ) : (
          <ThumbDownOutlined sx={{ fontSize: "1.25rem" }} color={"primary"} />
        )}
      </div>
      <p>{text}</p>
    </Card>
  );
}

export default ReviewCard;
