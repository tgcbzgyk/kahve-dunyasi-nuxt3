<template>
  <div class="product-card">
    <div class="favorite-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>

    <div class="image-wrapper">
      <img :src="product.imgUrl" :alt="product.name" class="product-image" />
    </div>
    
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-weight" v-if="product.weight">{{ product.weight }}</p>
      <div class="price">{{ formatPrice(product.price) }} TL</div>
      
      <button class="add-to-cart-btn" @click="addToCart">
        Sepete Ekle
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product';
import { useCartStore } from '~/stores/cart'; // 1. Store'u çağır

const props = defineProps<{
  product: IProduct
}>();

const cartStore = useCartStore(); // 2. Değişkene ata

const formatPrice = (price: number) => {
  return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const addToCart = () => {
  // 3. Store'daki action'ı kullan
  cartStore.addToCart(props.product);
  alert(`${props.product.name} sepete eklendi!`);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.product-card {
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  text-align: center;
  transition: box-shadow 0.3s ease;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.product-card:hover { box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

.favorite-icon { position: absolute; top: 15px; right: 15px; cursor: pointer; z-index: 2; }
.favorite-icon:hover svg { fill: #e53935; stroke: #e53935; }

.image-wrapper { height: 200px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; }
.product-image { max-width: 100%; max-height: 100%; object-fit: contain; }

.product-info { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.product-title { font-size: 16px; font-weight: 600; color: #333; margin: 0; line-height: 1.4; }
.product-weight { font-size: 13px; color: #888; margin: 0; }
.price { font-size: 18px; font-weight: 700; color: #004d40; margin: 5px 0 15px; }

.add-to-cart-btn {
  width: 100%;
  padding: 12px;
  background-color: white;
  color: #004d40;
  border: 1px solid #004d40;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover { background-color: #004d40; color: white; }
</style>