<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Giriş Yap</h2>
      <p class="subtitle">Kahve ve çikolata dünyasına hoş geldiniz.</p>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>E-posta</label>
          <input type="email" placeholder="ornek@email.com" required />
        </div>

        <div class="form-group">
          <label>Şifre</label>
          <input type="password" placeholder="******" required />
        </div>

        <button type="submit" class="auth-btn">GİRİŞ YAP</button>
      </form>

      <div class="auth-footer">
        Hesabınız yok mu? <NuxtLink to="/uye-ol">Üye Ol</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Layout olarak 'blank' kullanıyoruz (Footersiz)
definePageMeta({
  layout: 'blank'
});

const handleLogin = () => {
  // Gerçek Firebase Auth yapmıyoruz (Gerekmediği için)
  // Sadece başarılıymış gibi davranıp ana sayfaya atıyoruz.
  alert("Giriş Başarılı! Hoşgeldiniz.");
  return navigateTo('/'); // Ana sayfaya yönlendir
};
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh; /* Ekranın ortasında dursun */
}

.auth-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 { color: #004d40; margin-bottom: 5px; }
.subtitle { color: #666; font-size: 14px; margin-bottom: 30px; }

.form-group { margin-bottom: 20px; text-align: left; }
label { display: block; font-weight: 600; font-size: 13px; color: #333; margin-bottom: 5px; }
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box; /* Taşmayı engeller */
}
input:focus { border-color: #004d40; outline: none; }

.auth-btn {
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
.auth-btn:hover { background-color: #00362d; }

.auth-footer { margin-top: 20px; font-size: 13px; color: #666; }
.auth-footer a { color: #004d40; font-weight: 700; text-decoration: none; }
.auth-footer a:hover { text-decoration: underline; }
</style>