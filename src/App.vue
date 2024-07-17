<template>
    <header>
      <button @click="authStore.logout" v-if="authStore.isAuthenticated">Logout</button>
      <button @click="authStore.login" v-else>Login</button>
    </header>
    <div class="main">
      <HomeView />
    </div>
</template>

<script setup>

import HomeView from "./components/HomeView.vue";

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

</script>

<style scoped>
.main{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>