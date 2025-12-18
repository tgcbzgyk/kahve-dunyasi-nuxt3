// types/order.ts
import type { ICartItem } from "~/stores/cart";

export interface IOrder {
  items: ICartItem[]; // Sepetteki ürünler
  totalPrice: number; // Toplam tutar
  createdAt: Date;    // Sipariş tarihi
  status: 'new' | 'processing' | 'completed'; // Sipariş durumu
}