import axios from "@/lib/axios";
import { IReview } from "../models/review.interface";
import { IReviewDto } from "@/core/reviews/models/review-dto.interface";

export default class ReviewsService {
  public static async getAllByItem(itemId: number | string): Promise<IReview[]> {
    return await axios.get<IReview[]>(`/item/${itemId}/review`).then(res => res.data);
  }

  public static async create(itemId: number | string, data: IReviewDto): Promise<IReview[]> {
    return await axios.postForm<IReview[]>(`/item/${itemId}/review`, data).then(res => res.data);
  }

  public static async delete(id: number | string): Promise<IReview> {
    return await axios.delete<IReview>(`/review/${id}`).then(res => res.data);
  }

  public static async edit(
    id: string,
    data: Partial<IReviewDto>,
  ): Promise<IReview> {
    return await axios.patch<IReview>(`/review/${id}`, data).then(res => res.data);
  }
}
