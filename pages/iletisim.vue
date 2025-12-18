<template>
  <div class="contact-page">
    <div class="form-container">
      <h2>Bize Ulaşın</h2>
      <p>Görüş ve önerileriniz bizim için değerli.</p>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Adınız Soyadınız</label>
          <input v-model="form.name" type="text" required placeholder="Adınız..." />
        </div>

        <div class="form-group">
          <label>E-posta Adresiniz</label>
          <input v-model="form.email" type="email" required placeholder="ornek@email.com" />
        </div>

        <div class="form-group">
          <label>Konu</label>
          <select v-model="form.subject">
             <option>Genel İstek</option>
             <option>Şikayet</option>
             <option>Teşekkür</option>
             <option>Bayilik Başvurusu</option>
          </select>
        </div>

        <div class="form-group">
          <label>Mesajınız</label>
          <textarea v-model="form.message" rows="5" required placeholder="Mesajınızı yazınız..."></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="contactStore.loading">
          {{ contactStore.loading ? 'Gönderiliyor...' : 'GÖNDER' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useContactStore } from '~/stores/contact'; // Store 3
import type { IMessage } from '~/types/message';   // Interface

// YENİ LAYOUT'U KULLANIYORUZ
definePageMeta({
  layout: 'blank' 
});

const contactStore = useContactStore();

const form = ref({
  name: '',
  email: '',
  subject: 'Genel İstek',
  message: ''
});

const handleSubmit = async () => {
  const messageData: IMessage = {
    ...form.value,
    createdAt: new Date()
  };

  const success = await contactStore.sendMessage(messageData);
  
  if (success) {
    // Formu temizle
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
  }
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
}
.form-container {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 500px;
}
h2 { color: #004d40; margin-bottom: 10px; }
p { color: #666; margin-bottom: 30px; font-size: 14px; }

.form-group { margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; }
label { font-weight: 600; font-size: 13px; color: #333; }
input, select, textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
}
input:focus, textarea:focus { border-color: #004d40; outline: none; }

.submit-btn {
  width: 100%;
  background-color: #004d40;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
}
.submit-btn:hover { background-color: #00362d; }
.submit-btn:disabled { background-color: #ccc; cursor: not-allowed; }
</style>