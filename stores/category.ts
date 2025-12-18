// stores/category.ts
import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import type { ICategory } from '~/types/category';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as ICategory[],
    loading: false
  }),

  actions: {
    async fetchCategories() {
      
      if (this.categories.length > 0) return;

      this.loading = true;
      try {
        const { $db } = useNuxtApp();
        const querySnapshot = await getDocs(collection($db, 'categories'));
        
        const tempCategories: ICategory[] = [];
        querySnapshot.forEach((doc) => {
          tempCategories.push(doc.data() as ICategory);
        });

        
        this.categories = tempCategories.sort((a, b) => a.id - b.id);

      } catch (error) {
        console.error("Kategori hatası:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});