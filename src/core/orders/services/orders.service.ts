import axios from "@/lib/axios";
import { IOrder } from "@/core/orders/models/order.interface";
import { IOrderDto } from "@/core/orders/models/oreder-dto.interface";

export default class OrdersService {
  public static async getAll(): Promise<IOrder[]> {
    return await axios.get<IOrder[]>("/order").then(res => res.data);
  }

  public static async getById(id: number | string): Promise<IOrder[]> {
    return await axios.get<IOrder[]>(`/order/${id}`).then(res => res.data);
  }

  public static async create(data: IOrderDto): Promise<IOrder[]> {
    return await axios.post<IOrder[]>(`/order`, data).then(res => res.data);
  }

  public static async delete(id: number | string): Promise<IOrder> {
    return await axios.delete<IOrder>(`/order/${id}`).then(res => res.data);
  }

  public static async edit(
    id: string,
    data: Partial<IOrderDto>,
  ): Promise<IOrder> {
    return await axios.patch<IOrder>(`/order/${id}`, data).then(res => res.data);
  }
}
