<template>
  <div class="home-page">
    
    <TheSlider />

    <div class="product-section">
      <h2 class="section-title">Öne Çıkanlar</h2>
      
      <div v-if="productStore.loading" class="loading-text">
        Ürünler Yükleniyor...
      </div>

      <div v-else class="product-grid">
        <ProductCard 
          v-for="product in productStore.products" 
          :key="product.id" 
          :product="product"
        />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '~/stores/product'; // 1. Store'u çağır

// 2. Store'u değişkene ata
const productStore = useProductStore();

// 3. Sayfa açılınca verileri çek
onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped>
.product-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 24px;
  margin: 30px 0;
  color: #333;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.loading-text {
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 50px;
}
</style>