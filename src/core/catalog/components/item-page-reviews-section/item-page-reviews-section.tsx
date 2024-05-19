import React from "react";
import styles from "./item-page-reviews-section.style.module.scss";
import { Badge } from "@mui/material";
import { IReview } from "@/core/reviews/models/review.interface";
import ReviewCard from "@/core/catalog/components/item-page-reviews-section/components/review-card/review-card";
import NewReview from "@/core/catalog/components/item-page-reviews-section/components/new-review/new-review";

type ItemPageReviewsSectionProps = {
  reviews: IReview[];
  itemId: number;
};

function ItemPageReviewsSection({ reviews, itemId }: ItemPageReviewsSectionProps) {
  return (
    <section className={styles["reviews-section"]}>
      <Badge
        badgeContent={reviews.length}
        showZero
        sx={{
          "& .MuiBadge-badge": {
            fontSize: "1.5rem",
            paddingLeft: "1.5rem",
            marginTop: "0.25rem",
          },
        }}
      >
        <h3>Отзывы</h3>
      </Badge>
      {reviews.length > 0 ? (
        <ul className={styles["reviews-section__list"]}>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <ReviewCard
                  id={review.id}
                  userFullName={review.userFullName}
                  text={review.text}
                  rating={review.rating}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Пусто</p>
      )}
      <NewReview itemId={itemId}/>
    </section>
  );
}

export default ItemPageReviewsSection;
