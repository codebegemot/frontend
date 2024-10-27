<template>
  <div id="app">
    <SplashScreen v-if="showSplash" @splash-complete="onSplashComplete" />
    <router-view v-else />
  </div>
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";

export default {
  name: "App",
  components: {
    SplashScreen
  },
  data() {
    return {
      showSplash: !sessionStorage.getItem("splashSeen"), // Показываем только если "splashSeen" не установлен в sessionStorage
    };
  },
  methods: {
    onSplashComplete() {
      this.showSplash = false;
      sessionStorage.setItem("splashSeen", "true"); // Устанавливаем, что Splash Screen был показан в текущей сессии
      this.$router.push("/home"); // Переходим на главную страницу после Splash Screen
    }
  }
};
</script>

<style>
/* Добавьте стили для основного контейнера, если нужно */
</style>
