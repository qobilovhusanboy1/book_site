<template>
  <div v-if="loading" class="relative">
    <Loading />
  </div>
  <div v-else class="bg-[#1F1E1D] min-h-[100vh]">
    <Navbar />
    <img class=" relative container py-20 pb-40 m-auto" src="../assets/images/hero.svg" alt="">
    <div class="container m-auto absolute w-[80%] bg-[#242221] p-20 rounded-[30px] left-[10%] top-[55%]">
      <input class="w-[100%] bg-[#404040] text-white p-4 rounded-2xl" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." type="text" v-model="searchingTitle" @input.enter="onSearchProducts"/>
    </div>

    <div class="container m-auto flex gap-20 justify-center pb-10">
      <div v-for="category of categories">
        <p class="text-3xl text-[#C9AC8C]">{{ category.category_name }}</p>
      </div>
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
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Navbar from "../components/Navbar.vue";


import { useHome } from "../composables/home";
import Loading from "../components/Loading.vue";

const categories = ref([])
const { products, loading, searchingTitle, onSearchProducts } = useHome();

onMounted(async() => {
  const res = await axios.get('http://localhost:4000/api/category/findall');
  categories.value = res.data.categories
})
</script>