<template>
  <header class="site-header">
    
    <div class="top-bar">
      <div class="top-left">
        <NuxtLink to="/kurumsal-hediyeler" class="corporate-link">
          <span class="text-upper">Kurumsal hediyeler, kurumlara özel fiyatlarıyla</span>
          <span class="text-lower underline">kahvedunyasi.com'da</span>
        </NuxtLink>
      </div>

      <div class="top-center">
        500 TL VE ÜZERİ SİPARİŞLERİNİZDE <span class="bold-red">KARGO BEDAVA!</span>
      </div>

      <div class="top-right-placeholder"></div>
    </div>

    <div class="middle-bar">
      <div class="middle-content">
        <div class="app-links"></div>
        <div class="user-actions">
          <div class="phone-area">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
            <span>0 (850) 393 7070</span>
          </div>
          <div class="lang-select">TR <span class="arrow">⌄</span></div>
          <NuxtLink to="/kurumsal-hediyeler" class="nav-item-small">Kurumsal Hediyeler</NuxtLink>
          <a href="#" class="nav-item-small">Hakkımızda <span class="arrow">⌄</span></a>
        </div>
      </div>
    </div>

    <div class="main-header">
      <div class="header-content">
        
        <NuxtLink to="/" class="logo-link">
          <img src="/assets/kdlogo.png" alt="Kahve Dünyası" class="logo-img" />
        </NuxtLink>

        <nav class="nav-wrapper">
          <div class="primary-nav">
            <span v-if="categoryStore.loading" style="font-size:12px; color:#999;">Yükleniyor...</span>
            
            <NuxtLink 
              v-for="cat in categoryStore.categories" 
              :key="cat.id" 
              :to="cat.link" 
              class="nav-link"
            >
              {{ cat.name }}
            </NuxtLink>
          </div>
        </nav>

        <div class="utility-nav">
          <button class="icon-btn search-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004d40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          <NuxtLink to="/giris" class="icon-btn user-btn">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004d40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</NuxtLink>
          
          <button class="icon-btn cart-btn" @click="cartStore.toggleCart()">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004d40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    <span v-if="cartStore.totalItems > 0" class="cart-badge">
      {{ cartStore.totalItems }}
    </span>
</button>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';
import { useCategoryStore } from '~/stores/category'; // YENİ

const cartStore = useCartStore();
const categoryStore = useCategoryStore(); // YENİ

// Sayfa açılınca kategorileri çek
onMounted(() => {
  categoryStore.fetchCategories();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.site-header {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
}

/* TOP BAR */
.top-bar {
  display: flex;
  font-size: 13px;
  height: 64px;
  background-color: #f5f5f5;
}

.top-left {
  background-color: #004d40;
  color: white;
  flex: 0 0 35%; 
  display: flex;
  align-items: center;
  justify-content: center; 
  padding-right: 30px; 
  border-bottom-right-radius: 60px;
  z-index: 2;
}

.corporate-link {
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  line-height: 1.3; 
  margin-left: 20px;
}

.text-upper { font-weight: 600; font-size: 11px; opacity: 0.9; margin-bottom: 2px; }
.text-lower.underline { text-decoration: underline; color: #ffcc00; font-weight: 800; font-size: 13px; }

.top-center {
  color: #333;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;
  z-index: 1;
}

.bold-red { color: #8b0000; font-weight: bold; margin-left: 5px; }

/* MIDDLE BAR */
.middle-bar {
  background-color: white;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  font-size: 13px;
  color: #555;
}

.middle-content {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}

.phone-area { display: flex; align-items: center; gap: 5px; font-weight: 600; color: #333; }
.nav-item-small { text-decoration: none; color: #333; font-weight: 500; }

/* MAIN HEADER */
.main-header {
  background-color: white;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.header-content {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 20px;
}

.logo-img { height: 90px; width: auto; display: block; }
.nav-wrapper { flex: 1; display: flex; justify-content: flex-start; margin-left: 40px; }
.primary-nav { display: flex; gap: 25px; }

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.2s;
}

.nav-link:hover { color: #004d40; }

.utility-nav { display: flex; align-items: center; gap: 15px; }
.icon-btn { background: none; border: none; cursor: pointer; padding: 5px; display: flex; align-items: center; justify-content: center; }
.icon-btn:hover svg { stroke: #26a69a; }

.cart-btn {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e53935; /* Kırmızı */
  color: white;
  font-size: 10px;
  font-weight: bold;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white; /* Etrafında beyaz boşluk olsun */
}
</style>