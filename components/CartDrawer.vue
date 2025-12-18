<template>
  <div>
    <div 
      v-if="cartStore.isCartOpen" 
      class="overlay" 
      @click="cartStore.toggleCart()"
    ></div>

    <div class="cart-drawer" :class="{ open: cartStore.isCartOpen }">
      
      <div class="drawer-header">
        <h3>Sepetim <span style="font-weight: 400; color: #888;">({{ cartStore.totalItems }} Ürün Eklendi)</span></h3>
        <button @click="cartStore.toggleCart()" class="close-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="free-shipping-bar">
        1000 TL VE ÜZERİ SİPARİŞLERİNİZDE <span class="red-text">KARGO BEDAVA!</span> 🎉
      </div>

      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <p>Sepetinizde ürün bulunmamaktadır.</p>
        <button @click="cartStore.toggleCart()" class="continue-btn">Alışverişe Devam Et</button>
      </div>

      <div v-else class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-img-wrapper">
             <img :src="item.imgUrl" :alt="item.name" class="item-img" />
          </div>

          <div class="item-details">
            <div class="item-header">
               <h4 class="item-title">{{ item.name }}</h4>
               <button @click="cartStore.removeFromCart(item.id)" class="trash-btn">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
               </button>
            </div>
            
            <div class="item-price">{{ (item.price * item.quantity).toLocaleString('tr-TR', {minimumFractionDigits: 2}) }} TL</div>

            <div class="quantity-control">
              <button class="qty-btn" @click="decreaseQty(item)">−</button>
              <span class="qty-val">{{ item.quantity }} Adet</span>
              <button class="qty-btn" @click="increaseQty(item)">+</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cartStore.items.length > 0" class="drawer-footer">
        
        <div class="footer-arrow-icon">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>

        <div class="total-row">
          <span class="total-label">Ara Toplam</span>
          <span class="total-price">{{ cartStore.totalPrice.toLocaleString('tr-TR', {minimumFractionDigits: 2}) }} TL</span>
        </div>
        
        <div class="action-buttons">
          <button class="btn btn-outline" @click="cartStore.toggleCart()">Sepete Git</button>
          <button class="btn btn-primary" @click="cartStore.placeOrder()">Ödeme Yap</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();

// Adet Artırma/Azaltma
const increaseQty = (item: any) => {
  item.quantity++;
};

const decreaseQty = (item: any) => {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cartStore.removeFromCart(item.id);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

/* Overlay */
.overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5); z-index: 998;
}

/* Çekmece */
.cart-drawer {
  position: fixed; top: 0; right: -450px;
  width: 100%; max-width: 420px;
  height: 100%; background: white; z-index: 999;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  transition: right 0.3s ease-in-out;
  display: flex; flex-direction: column;
  font-family: 'Montserrat', sans-serif;
}
.cart-drawer.open { right: 0; }

/* Header */
.drawer-header {
  padding: 20px 25px;
  display: flex; justify-content: space-between; align-items: center;
  background: white;
}
.drawer-header h3 { font-size: 18px; font-weight: 700; color: #000; margin: 0; }
.close-btn { background: none; border: none; cursor: pointer; color: #333; padding: 0; }

/* Kargo Barı */
.free-shipping-bar {
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 12px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #333;
}
.red-text { color: #8b0000; font-weight: 700; }

/* Liste */
.cart-items { flex: 1; overflow-y: auto; padding: 0 25px; }

.cart-item {
  display: flex; gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.item-img-wrapper {
  width: 80px; height: 80px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 5px;
  display: flex; align-items: center; justify-content: center;
}
.item-img { max-width: 100%; max-height: 100%; object-fit: contain; }

.item-details { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }

.item-header { display: flex; justify-content: space-between; align-items: flex-start; }
.item-title { font-size: 14px; font-weight: 600; color: #333; margin: 0; line-height: 1.3; max-width: 85%; }

.trash-btn { background: none; border: none; cursor: pointer; padding: 0; }
.trash-btn:hover svg { stroke: #e53935; }

.item-price { font-size: 16px; font-weight: 700; color: #004d40; margin-top: 5px; }


.quantity-control {
  display: flex; align-items: center; justify-content: space-between;
  background-color: #f7f7f7;
  border-radius: 5px;
  width: 100px;
  padding: 2px 5px;
  margin-top: 10px;
}
.qty-btn { border: none; background: none; font-size: 18px; color: #999; cursor: pointer; padding: 0 5px; }
.qty-btn:hover { color: #333; }
.qty-val { font-size: 12px; font-weight: 600; color: #333; }

/* Boş Sepet */
.empty-cart { padding: 40px; text-align: center; color: #777; }
.continue-btn { margin-top: 15px; padding: 10px 20px; background: #004d40; color: white; border: none; border-radius: 4px; cursor: pointer; }

/* Footer */
.drawer-footer {
  padding: 20px 25px;
  border-top: 1px solid #eee;
  background: white;
  display: flex; flex-direction: column; gap: 15px;
}

.footer-arrow-icon { display: flex; justify-content: center; margin-top: -10px; margin-bottom: 5px; }

.total-row { display: flex; justify-content: space-between; align-items: center; }
.total-label { color: #888; font-size: 16px; font-weight: 500; }
.total-price { color: #004d40; font-size: 18px; font-weight: 700; }

.action-buttons { display: flex; gap: 15px; }
.btn {
  flex: 1;
  padding: 14px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline { background-color: white; border: 1px solid #ddd; color: #333; }
.btn-outline:hover { border-color: #999; }

.btn-primary { background-color: #004d40; border: 1px solid #004d40; color: white; }
.btn-primary:hover { background-color: #00362d; }
</style>