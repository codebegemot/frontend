<template>
    <div>
      <h1 class="text-2xl font-bold">Список Ивентов</h1>
      <ul>
        <li v-for="event in events" :key="event.id">
          {{ event.title }} — {{ event.description }} — {{ event.maxParticipants }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getAllEvents } from "../services/eventService";
  
  export default {
    name: "HomePage",
    data() {
      return {
        events: []
      };
    },
    async created() {
      this.events = await getAllEvents();
    }
  };
  </script>
  