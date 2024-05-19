import { Typography } from "@mui/material";
import styles from "./page.module.scss";
import CatalogItem from "@/core/catalog/components/catalog-item/catalog-item";
import SearchField from "@/core/catalog/components/search-field/search-field";
import { Metadata } from "next";
import ItemsService from "@/core/catalog/services/items.service";

export const metadata: Metadata = {
  title: "Каталог | Магазин мерча Warpoint",
};

type CatalogPageProps = {};

export default async function CatalogPage({}: CatalogPageProps) {
  const items = await ItemsService.getAll();

  return (
    <main className={styles.catalog}>
      <div className={styles["catalog__bg"]} />
      <section>
        <ul className={styles["catalog__items"]}>
          {items.map(item => {
            return (
              <li key={item.id}>
                <CatalogItem imageSrc={"/dev/hoodie1.jpg"}>
                  <CatalogItem.Title id={item.id}>
                    {item.title}
                  </CatalogItem.Title>
                  <Typography
                    component={"p"}
                    maxWidth={"60%"}
                    marginTop={"1rem"}
                    marginBottom={"2rem"}
                    whiteSpace={"pre"}
                  >
                    {item.description}
                  </Typography>
                  <CatalogItem.AddToCartButton item={item} />
                </CatalogItem>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
