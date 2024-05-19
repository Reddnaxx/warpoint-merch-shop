import { IItem } from "@/core/catalog/models/item.interface";

export interface IOrder {
  id: number;
  status: string;
  items: IItem[];
  userPhone: string;
  userFullName: string;
  deliveryAddress: string;
  deliveryDate: string;
  createdTime: string;
}
