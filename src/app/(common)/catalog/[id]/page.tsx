import styles from "./page.module.scss";
import { Metadata } from "next";
import ItemsService from "@/core/catalog/services/items.service";
import ReviewsService from "@/core/reviews/services/reviews.service";
import ItemPageItemSection from "@/core/catalog/components/item-page-item-section/item-page-item-section";
import ItemPageReviewsSection from "@/core/catalog/components/item-page-reviews-section/item-page-reviews-section";

export const metadata: Metadata = {
  title: "Каталог | Магазин мерча Warpoint",
};

type ItemPageProps = {
  params: { id: string };
};

export default async function ItemPage({ params }: ItemPageProps) {
  const item = await ItemsService.getById(params.id);
  const reviews = await ReviewsService.getAllByItem(params.id);

  return (
    <main className={styles["item-page"]}>
      <ItemPageItemSection item={item} />
      <ItemPageReviewsSection itemId={item.id} reviews={reviews} />
    </main>
  );
}
