import { Typography } from "@mui/material";
import styles from "./page.module.scss";
import CatalogItem from "@/core/catalog/components/catalog-item/catalog-item";
import SearchField from "@/core/catalog/components/search-field/search-field";

type CatalogPageProps = {};

export default function CatalogPage({}: CatalogPageProps) {
  return (
    <main className={styles.catalog}>
      <div className={styles["catalog__top"]}>
        <SearchField />
      </div>
      <section>
        <ul className={styles["catalog__items"]}>
          <CatalogItem imageSrc={"/dev/hoodie1.jpg"}>
            <CatalogItem.Title>
              Худи WARPOINT с принтом, мужской
            </CatalogItem.Title>
            <Typography
              component={"p"}
              maxWidth={"60%"}
              marginTop={"1rem"}
              marginBottom={"2rem"}
              whiteSpace={"pre"}
            >
              {"состав: хлопок 100%\nразмеры: XL, L, M, S"}
            </Typography>
            <CatalogItem.AddToCartButton
              item={{
                id: 1,
                title: "Худи WARPOINT с принтом, мужской",
                description: "состав: хлопок 100%\nразмеры: XL, L, M, S",
                image: "/dev/hoodie1.jpg",
                category: "top",
                cost: 2500,
                rating: 1,
              }}
            />
          </CatalogItem>
        </ul>
      </section>
    </main>
  );
}
