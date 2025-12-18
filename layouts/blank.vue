<template>
  <div class="blank-layout">
    <TheHeader />
    
    <div class="content-wrapper">
      <slot />
    </div>
    
    <div class="simple-footer">
      © 2025 Kahve Dünyası - Kurumsal İletişim
    </div>
  </div>
</template>

<style scoped>
.blank-layout {
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content-wrapper {
  flex: 1;
  padding: 40px 0;
}
.simple-footer {
  text-align: center;
  padding: 20px;
  color: #999;
  font-size: 12px;
  border-top: 1px solid #eee;
}
</style>