<template>
    <div class="event-card relative w-full h-screen flex flex-col">
      <!-- Фон с размытым изображением на весь экран -->
      <div
        v-if="event.image"
        class="absolute inset-0 bg-cover bg-center filter blur-lg opacity-30"
        :style="{ backgroundImage: `url(${event.image})` }"
      ></div>
      <!-- Основная информация об ивенте -->
      <div class="relative z-10 p-4 text-white">
        <h1 class="text-4xl font-bold">{{ event.title }}</h1>
        <p class="mt-2">{{ event.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventCard",
    props: {
      event: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .event-card {
    height: 100vh;
    scroll-snap-align: start;
  }
  </style>
  