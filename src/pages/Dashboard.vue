<template>
    <div v-if="loading" class="relative">
      <Loading />
    </div>
    <div v-else class="bg-[#1F1E1D] min-h-[100vh]">
      <div class="flex justify-end p-5">
        <Button class="btn-warning" @click="logout">Logout</Button>
      </div>
  
      <div class="container m-auto flex gap-20 justify-start pb-10">
        <p class="text-3xl text-[#C9AC8C]" @click="getadmins">Admins</p>
        <p class="text-3xl text-[#C9AC8C]">Users</p>
        <p class="text-3xl text-[#C9AC8C]">Books</p>
      </div>
  
      <div class=" container m-auto flex flex-wrap gap-8">
        <div class="w-[190px]" v-for="product of products">
          <img class="w-[100%] h-[250px] rounded-xl object-cover" :src="product.img_url" alt="">
          <h2 class="mt-2 text-[#C9AC8C] font-medium text-2xl font-['Playfair Display']">{{ product.name }}</h2>
          <p class="text-white">{{product.author}}</p>
          <strong class="text-white">${{product.price}}</strong>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { useStore } from "vuex";

import { useHome } from "../composables/home";
import Loading from "../components/Loading.vue";
import Button from "../components/base/base-button.vue";

const store = useStore();
const { products, loading } = useHome();

function logout() {
  store.commit("LOGOUT");
}
</script>