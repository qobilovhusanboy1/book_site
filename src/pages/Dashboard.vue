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
    <div class="w-full justify-center items-center flex ">
      <div>

        <h1 class="text-4xl">My Profile</h1>
        <p class="text-black mt-6">First Name</p>
        <input class="p-2 mb-2 mt-2 border rounded-md w-[880px]" type="text" name="" id="" placeholder="First Name" >
        <p class="text-grey mb-8">Please Enter your first name</p>
  
        <p class="text-black">Last Name</p>
        <input class="p-2 mb-2 mt-2 border rounded-md w-[880px]" type="text" name="" id="" placeholder="Last Name" >
        <p class="text-grey mb-8">Please Enter your last name</p>
      7
        <div class="flex ">
          <div>

            <p class="text-black ">Phone</p>
            <input class="p-2 mb-2 mt-2 border rounded-md w-[400px]" type="text" name="" id="" placeholder="Phone Number" >
            <p class="text-grey mb-8">Please Enter your Phone number </p>
    
          </div>
          <div class="ml-20">
            <p class="text-black ">Email</p>
            <input class="p-2 mb-2 mt-2 border rounded-md w-[400px]" type="text" name="" id="" placeholder="Email" >
            <p class="text-grey">Please Enter your Email</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  </template>
  
<script setup>
import { useStore } from "vuex";
import { useHome } from "../composables/home";
import Loading from "../components/Loading.vue";
import Button from "../components/base/base-button.vue";
import profile from "../pages/admin/AdminProfile.vue"

const store = useStore();
const { products, loading } = useHome();

async function getProfile(){
  const res = localStorage.getItem("user");
  console.log(res);
}
async function GetAdmins(){
  const admins=await store.dispatch('viewAdmins')
}
async function GetUsers(){
  console.log('Users bosildi');
}

function logout() {
  store.commit("LOGOUT");
}
</script>

<style lang="scss" scoped></style>