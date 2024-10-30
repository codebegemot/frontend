<template>
  <!-- Контейнер для бесконечной ленты мероприятий -->
  <div class="snap-y snap-mandatory overflow-y-scroll h-screen">
    <!-- Блоки мероприятий -->
    <div
      v-for="event in events"
      :key="event.id"
      class="snap-start h-screen flex flex-col relative w-full"
    >
      <!-- Фон с размытым изображением на весь экран -->
      <div
        class="absolute inset-0 bg-cover bg-center filter blur-lg opacity-30"
        :style="{ backgroundImage: `url(${event.imageUrl || 'default.jpg'})` }"
      ></div>

      <!-- Затемняющий слой для улучшения контрастности текста -->
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <!-- Основная информация о мероприятии -->
      <div class="relative z-10 flex flex-col justify-between p-4 text-white h-full">
        <!-- Верхняя часть с изображением и текстом -->
        <div class="flex-1 overflow-y-auto flex flex-col items-center">
          <!-- Контейнер с фиксированным размером для изображения -->
          <div class="mb-4 flex-shrink-0 w-64 h-64 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <img
              :src="event.imageUrl || 'default.jpg'"
              alt="Event Image"
              class="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div class="text-center max-w-md">
            <h2 class="text-xl font-semibold mb-2">{{ event.title }}</h2>
            <p class="text-base mb-2">{{ event.description }}</p>
            <p class="text-base mb-2">
              Место проведения: {{ event.location || 'Уточняется' }}
            </p>
            <p class="text-base mb-4">
              Организаторы:
              {{ event.eventOrganizers ? event.eventOrganizers.join(', ') : 'Неизвестны' }}
            </p>
          </div>
        </div>
        <!-- Нижняя часть с кнопкой -->
        <div class="flex-shrink-0">
          <button
          @click="goToEventDetails(event.id)"
          class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md" >
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
      loading: false,
    };
  },
  methods: {
    async fetchEvents() {
      try {
        this.loading = true;
        const newEvents = await eventService.getAllEvents();
        this.events = [...this.events, ...newEvents];
        this.loading = false;
      } catch (error) {
        console.error("Ошибка при получении мероприятий:", error);
        this.loading = false;
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
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
