import { IItem } from "@/core/catalog/models/item.interface";
import axios from "@/lib/axios";
import { IItemDto } from "@/core/catalog/models/item-dto.interface";

export default class ItemsService {
  public static async getAll(): Promise<IItem[]> {
    return await axios.get<IItem[]>("/item").then(res => res.data);
  }

  public static async getById(id: number | string): Promise<IItem> {
    return await axios.get<IItem>(`/item/${id}`).then(res => res.data);
  }

  public static async checkIfStock(id: number | string): Promise<IItem[]> {
    return await axios.get<IItem[]>(`/item/${id}/stock`).then(res => res.data);
  }

  public static async checkIfAbsent(id: number | string): Promise<IItem[]> {
    return await axios.get<IItem[]>(`/item/${id}/absent`).then(res => res.data);
  }

  public static async create(data: IItemDto): Promise<IItem[]> {
    return await axios.postForm<IItem[]>(`/item`, data).then(res => res.data);
  }

  public static async delete(id: number | string): Promise<IItem> {
    return await axios.delete<IItem>(`/item/${id}`).then(res => res.data);
  }

  public static async edit(
    id: string,
    data: Partial<IItemDto>,
  ): Promise<IItem> {
    return await axios.patchForm<IItem>(`/item/${id}`, data).then(res => res.data);
  }
}
