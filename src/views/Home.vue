<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <div
        v-for="event in events"
        :key="event.id"
        class="relative w-full max-w-xs mb-4 rounded-lg overflow-hidden bg-opacity-80 bg-black shadow-lg"
      >
        <!-- Фон с размытым изображением -->
        <div
            class="absolute top-0 w-full h-2/3 bg-cover bg-center filter blur-lg opacity-30"
            :style="{ backgroundImage: `url(${event.imageUrl || 'default.jpg'})` }" >
        </div>
  
        <!-- Основная информация о мероприятии -->
        <div class="relative p-10">
          <img :src="event.imageUrl || 'default.jpg'" alt="Event Image" class="w-full rounded-lg mb-4" />
          <div class="text-center">
            <h2 class="text-base font-semibold mb-1">{{ event.title }}</h2>
            <p class="text-xs mb-1">{{ event.description }}</p>
            <p class="text-xs mb-1">Место проведения: {{ event.location || 'Уточняется' }}</p>
            <p class="text-xs mb-2">Организаторы: {{ event.eventOrganizers ? event.eventOrganizers.join(', ') : 'Неизвестны' }}</p>
            <button @click="goToEventDetails(event.id)" class="w-full py-2 mt-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import eventService from "@/services/eventService";
  
  export default {
    name: "HomePage",
    data() {
      return {
        events: [],
      };
    },
    methods: {
      async fetchEvents() {
        try {
          this.events = await eventService.getAllEvents();
        } catch (error) {
          console.error("Ошибка при получении мероприятий:", error);
        }
      },
      goToEventDetails(eventId) {
        this.$router.push(`/event/${eventId}`);
      },
    },
    created() {
      this.fetchEvents();
    },
  };
  </script>
  
  <style scoped>
  /* Добавьте стили для анимации или других эффектов, если необходимо */
  </style>
  