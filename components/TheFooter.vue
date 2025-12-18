<template>
  <footer class="the-footer">
    <div class="footer-content">
      
      <div class="footer-top">
        <div class="links-group">
          <div class="footer-column">
            <h4 class="column-title">Kategoriler</h4>
            <NuxtLink to="#">Yılbaşı Ürünleri</NuxtLink>
            <NuxtLink to="#">Hediye Gönder</NuxtLink>
            <NuxtLink to="#">Kahve</NuxtLink>
            <NuxtLink to="#">Çikolata</NuxtLink>
            <NuxtLink to="#">Aksesuar</NuxtLink>
            <NuxtLink to="#">Pastacılık</NuxtLink>
          </div>

          <div class="footer-column">
            <h4 class="column-title">Kurumsal</h4>
            <NuxtLink to="#">Hikayemiz</NuxtLink>
            <NuxtLink to="#">Üretim</NuxtLink>
            <NuxtLink to="#">Kurumsal Çözümler</NuxtLink>
            <NuxtLink to="#">Kariyer</NuxtLink>
            <NuxtLink to="#">Atölye</NuxtLink>
          </div>

          <div class="footer-column">
            <h4 class="column-title">Yardım</h4>
            <NuxtLink to="#">Sıkça Sorulan Sorular</NuxtLink>
            <NuxtLink to="#">Siparişini Sorgula</NuxtLink>
            <NuxtLink to="#">İletişim</NuxtLink>
            <div class="phone-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11Z" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M18 21V16H21V21H18Z" fill="white"/><path d="M3 21V16H6V21H3Z" fill="white"/></svg>
              <span class="phone-text">0 (850) 393 7070</span>
            </div>
          </div>
        </div>

        <div class="social-section">
          <div class="social-title">Bizi Takip Edin</div>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            <a href="#" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="bottom-row">
          <div class="payment-icons">
             <img src="/assets/amex.png" alt="Amex" class="pay-img" />
             <img src="/assets/Master.png" alt="Mastercard" class="pay-img" />
             <img src="/assets/visa.png" alt="Visa" class="pay-img" />
             <img src="/assets/troy.webp" alt="Troy" class="pay-img" />
          </div>
          <div class="legal-links">
            <a href="#">Çerez Politikası</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Üyelik Sözleşmesi</a>
          </div>
        </div>
        
        <div class="copyright-row">
          <div class="left-copy">
             <span>©2025 Kahve Dünyası Clone - Tüm Hakları Saklıdır.</span>
          </div>
          <div class="powered-by">
            Powered by <strong>Loodos</strong>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

.the-footer {
  background-color: #004d40;
  color: white;
  padding: 60px 0 30px;
  margin-top: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}

.footer-content { max-width: 1250px; margin: 0 auto; padding: 0 30px; display: flex; flex-direction: column; }
.footer-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 60px; }
.links-group { display: flex; gap: 80px; }
.footer-column { display: flex; flex-direction: column; gap: 10px; }
.column-title { font-size: 16px; font-weight: 700; margin-bottom: 20px; color: white; }
.footer-column a { color: white; text-decoration: none; font-weight: 500; opacity: 0.9; transition: opacity 0.2s; }
.footer-column a:hover { opacity: 1; text-decoration: underline; }

.phone-wrapper { display: flex; align-items: center; gap: 10px; margin-top: 15px; font-weight: 700; font-size: 16px; }

/* SOSYAL MEDYA */
.social-section { display: flex; flex-direction: column; gap: 15px; }
.social-title { font-weight: 700; font-size: 14px; }
.social-icons { display: flex; gap: 10px; }
.social-icon { background-color: rgba(255, 255, 255, 0.15); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
.social-icon:hover { background-color: rgba(255, 255, 255, 0.3); }

/* ALT KISIM */
.footer-bottom { display: flex; flex-direction: column; gap: 30px; }
.bottom-row { display: flex; justify-content: space-between; align-items: center; }
.payment-icons { display: flex; gap: 15px; align-items: center; }
.pay-img { height: 26px; width: auto; opacity: 0.9; }
.legal-links { display: flex; gap: 20px; }
.legal-links a { color: white; text-decoration: none; font-size: 12px; opacity: 0.8; }
.copyright-row { display: flex; justify-content: space-between; align-items: center; font-size: 11px; opacity: 0.8; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; }
</style>