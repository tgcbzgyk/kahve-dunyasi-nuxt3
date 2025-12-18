// stores/cart.ts
import { defineStore } from 'pinia';
import type { IProduct } from '~/types/product';
import { collection, addDoc } from 'firebase/firestore'; 

export interface ICartItem extends IProduct {
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as ICartItem[],
    isCartOpen: false,
  }),

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
  },

  actions: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    
    addToCart(product: IProduct) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.isCartOpen = true; 
    },

    removeFromCart(productId: number) {
      const index = this.items.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    
    clearCart() {
      this.items = [];
    },

    
    async placeOrder() {
      // 1. Sepet boşsa işlem yapma
      if (this.items.length === 0) return;

      try {
        // 2. Veritabanı bağlantısını al
        const { $db } = useNuxtApp();

        // 3. Sipariş objesini hazırla
        const newOrder = {
          items: this.items,
          totalPrice: this.totalPrice,
          createdAt: new Date(),
          status: 'new'
        };

        // 4. Firebase 'orders' tablosuna YAZ (Tablo yoksa otomatik oluşturur)
        const docRef = await addDoc(collection($db, 'orders'), newOrder);
        
        console.log("Sipariş No:", docRef.id);

        // 5. Başarılı olunca sepeti temizle ve kapat
        this.clearCart();
        this.isCartOpen = false;
        
        alert("Siparişiniz başarıyla alındı! Teşekkürler.");

      } catch (error) {
        console.error("Sipariş hatası:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    }
  },
});