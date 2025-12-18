// stores/contact.ts
import { defineStore } from 'pinia';
import { collection, addDoc } from 'firebase/firestore';
import type { IMessage } from '~/types/message';

export const useContactStore = defineStore('contact', {
  state: () => ({
    loading: false,
  }),

  actions: {
    async sendMessage(messageData: IMessage) {
      this.loading = true;
      try {
        // Nuxt'tan db bağlantısını al
        const { $db } = useNuxtApp();
        
        // 'messages' tablosuna kaydet (Tablo yoksa kendi açar)
        await addDoc(collection($db, 'messages'), messageData);
        
        alert("Mesajınız iletildi! En kısa sürede döneceğiz.");
        return true; // Başarılı

      } catch (error) {
        console.error("Mesaj hatası:", error);
        alert("Bir hata oluştu.");
        return false; // Başarısız
      } finally {
        this.loading = false;
      }
    }
  }
});