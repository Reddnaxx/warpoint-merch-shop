export interface IOrderDto {
  userId: number | null;
  itemsId: number[];
  userEmail: string;
  userPhone: string;
  userFullName: string;
  deliveryAddress: string;
  deliveryDate: string;
}
