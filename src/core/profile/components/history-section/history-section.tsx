import OrdersService from "@/core/orders/services/orders.service";
import HistoryCard from "./components/history-card/history-card";
import styles from "./history-section.style.module.scss";
import { Pagination } from "@mui/material";

type UserSectionProps = {};

async function HistorySection({}: UserSectionProps) {
  const orders = await OrdersService.getAll();

  return (
    <section className={styles["history-section"]}>
      <h2>История заказов</h2>
      <ul className={styles["history-section__list"]}>
        <HistoryCard item={null} date={null} status={null} />
        {orders.map(order =>
          order.items.map(item => {
            return (
              <li key={item.id} className={styles["item"]}>
                <HistoryCard
                  item={item}
                  date={order.createdTime}
                  status={order.status}
                />
              </li>
            );
          }),
        )}
      </ul>
      <div className={styles["history-section__pagination"]}>
        <Pagination/>
      </div>
    </section>
  );
}

export default HistorySection;
