// stores/product.ts
import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore'; // Firestore fonksiyonları
import type { IProduct } from '~/types/product';

export const useProductStore = defineStore('product', {
  // 1. STATE: Verilerin tutulduğu yer
  state: () => ({
    products: [] as IProduct[], // Ürün listemiz burada duracak
    loading: false,             // Yükleniyor mu?
  }),

  // 2. ACTIONS: İşlemler
  actions: {
    async fetchProducts() {
      // Eğer ürünler zaten çekildiyse tekrar yorma (Performans)
      if (this.products.length > 0) return;

      this.loading = true;
      
      try {
        // Plugin'den db bağlantısını al
        const { $db } = useNuxtApp();
        
        // 'products' tablosuna bağlan
        const querySnapshot = await getDocs(collection($db, 'products'));
        
        // Gelen verileri listemize doldur
        const tempProducts: IProduct[] = [];
        querySnapshot.forEach((doc) => {
          // Firestore'dan gelen veriyi bizim tipimize çeviriyoruz
          tempProducts.push(doc.data() as IProduct);
        });

        this.products = tempProducts;
        console.log("Ürünler Firebase'den çekildi:", this.products);

      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});