<template>
  <div v-if="loading" class="relative">
    <Loading />
  </div>
  <main class="flex">
    <div class="w-1/5 sticky h-screen top-0 left-0">
      <aside class="h-screen bg-gray-900 px-4 py-6 flex flex-col">
        <h2 class="text-center uppercase text-xl font-semibold mb-4 text-white">Admin Panel</h2>
        <Button @click="getProfile()" class="bg-white rounded-md p-2 mb-4">Profile</Button>
        <Button @click="GetAdmins()" class="bg-white rounded-md p-2 mb-4">Admins</Button>
        <Button @click="GetUsers()" class="bg-white rounded-md p-2 mb-4">Users</Button>
        <Button @click="GetBlockUsers()" class="bg-white rounded-md p-2 mb-4">Block Users</Button>
        <Button @click="AddBook()" class="bg-white rounded-md p-2 mb-4">Add Book</Button>
      </aside>
    </div>
    <div v-for="admin in admins"  class="w-full flex-wrap flex ">
      <div v-for="el  in admin" class="flex-wrap w-[320px] h-[370px] border ml-10 mt-10 p-7 rounded-xl">
        <img class="w-full h-[150px] rounded-xl" src="/src/assets/images/Support-Admin-icon-Graphics-43209390-1.jpg"  alt="">
        <h1 class="mt-1">First Name : {{ el.firstName }}</h1>
        <h1 class="mt-1">Last Name  : {{ el.lastName }}</h1>
        <h1 class="mt-1">Gender: {{ el.gender }}</h1>
        <h1 class="mt-1">Username:  {{ el.username }}</h1>
        <h1 class="mt-1"><i style="color: red;" class='bx bx-envelope'></i> Email: {{ el.email }}</h1>
        <h1 class="mt-1"><i style="color: green;" class='bx bxs-phone-call'></i> Phone: {{ el.phone }}</h1>
      </div>
    </div>
  </main>

</template>

<script setup>
import { useStore } from "vuex";
import {onMounted} from "vue"
import Loading from "/src/components/Loading.vue";
import Button from "/src/components/base/base-button.vue";

const store = useStore();
const { products, loading } = useHome();

  onMounted(()=>{
    GetAdmins()
  })

async function GetAdmins(){
  const admins=await store.dispatch('viewAdmins')
}
</script>