<template>
  <nav class="bg-[#242221] py-6 flex justify-between items-center text-white px-3">
    <a href="#" class="text-2xl ml-[60px]">BADIIYAT</a>
    <div class="w-[40%] flex justify-around items-center">
      <router-link class="link" to="/">Bosh sahifa</router-link>
      <router-link class="link" to="/not">Nasr</router-link>
      <router-link class="link" to="/not">Nazm</router-link>
      <router-link class="link" to="/not">Maqolalar</router-link>
      <router-link class="link" to="/not">Forum</router-link>
      <Button class="btn-warning" @click="logout">Logout</Button>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from "vuex";
import Button from "./base/base-button.vue";

const store = useStore();

function logout() {
  store.commit("LOGOUT");
}
</script>

<style scoped>
.link {
  border-bottom: 2px transparent solid;
  padding-bottom: 5px;
  transition: all 0.4s;
}
</style>