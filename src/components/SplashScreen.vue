<template>
    <div v-if="showSplash" class="splash-screen">
      <img src="../assets/splashscreen.gif" alt="Splash Animation" class="splash-animation" @load="onGifLoaded" />
    </div>
  </template>
  
  <script>
  export default {
    name: "SplashScreen",
    data() {
      return {
        showSplash: true,
      };
    },
    methods: {
      onGifLoaded() {
        setTimeout(() => {
          this.showSplash = false;
          this.$emit("splash-complete"); // Отправляем событие завершения Splash Screen
        }, 3000); // Установите время в миллисекундах, соответствующее длительности GIF
      }
    }
  };
  </script>
  
  <style scoped>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .splash-animation {
  width: 150px; /* Размер круга */
  height: 150px;
  border-radius: 50%; /* Делаем изображение кругом */
  object-fit: cover; /* Обрезаем изображение по форме круга */
}
  </style>
  