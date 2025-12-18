<template>
  <div class="slider-container">
    <div 
      class="slider-wrapper" 
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.title" class="slide-image" />
      </div>
    </div>

    <button class="slider-btn prev" @click="prevSlide">‹</button>
    <button class="slider-btn next" @click="nextSlide">›</button>
    
    <div class="dots">
      <span 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="dot" 
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface ISlide {
  id: number;
  title: string;
  image: string;
}


const slides = ref<ISlide[]>([
  { 
    id: 1, 
    title: 'Slide 1', 
    image: '/assets/slider-1.avif' 
  },
  { 
    id: 2, 
    title: 'Slide 2', 
    image: '/assets/slider-2.avif' 
  },
  { 
    id: 3, 
    title: 'Slide 3', 
    image: '/assets/slider-3.avif' 
  }
]);

const currentIndex = ref(0);
let intervalId: any = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 1300px; 
  height: 650px;     
  margin: 0 auto;    
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 12px; 
}
.slider-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 30px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  color: #004d40;
  z-index: 10;
  transition: background 0.3s;
}
.slider-btn:hover { background-color: white; }
.prev { left: 20px; }
.next { right: 20px; }

.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s;
}
.dot.active { background-color: white; transform: scale(1.2); }

@media (max-width: 768px) {
  .slider-container { height: 250px; }
}
</style>