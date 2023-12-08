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
        <Button @click="GetBlockUsersss()" class="bg-white rounded-md p-2 mb-4">Block Users</Button>
        <Button class="bg-white rounded-md p-2 mb-4">Add Book</Button>
        <Button @click="logout()" class="bg-white text-black rounded-md p-2 mb-4 btn-warning">Logout</Button>
      </aside>
    </div>
    <div class="w-4/5 ">
      <router-view></router-view>
    </div>

    <!-- <div class="flex bg-cover text-white justify-center " style="background-image:url('/src/assets/images/TRINITI KOLLEJI KUTUBXONASI1.png');height: 800px;">
      <div class="flex bg-cover text-white" style="background-image:url('/src/assets/images/TRINITI KOLLEJI KUTUBXONASI1.png');height: 800px;">
      <img class="rounded-full shadow-2xl m-5 w-[400px] h-[400px] [clip-path:circle()] bg-green-50 " :src="admin.image" alt="image">
      <div class="col ml-10">
        <div class="flex">
          <div class="w-[80%]">
            <h1 class="mt-5 text-xl">My profile</h1>
          </div>
          <div class="justify-end">
            <router-link to="/" class="bg-red-500 mt-5 p-3 rounded-xl " type="submit" @click="DeletedToken()">Logout</router-link>
          </div>
        </div>
        <p class="mt-5 ">First Name</p>
        <input type="text" placeholder="First Name" required v-model="admin.firstName" class="input_styles w-[500px] mt-2 text-black"/>
        <p class="c-grey-100">Please enter your first name</p>

        <p class="mt-10 ">Last Name</p>
        <input type="text" placeholder="Last Name" required v-model="admin.lastName" class="input_styles w-[500px] mt-2 text-black"/>
        <p class="c-grey-100">Please enter your last name</p>

        <div class="flex">
          <div class="col">
            <p class="mt-10 ">Phone</p>
            <input type="text" placeholder="Phone" required v-model="admin.id" class="input_styles w-[220px] mt-2 text-black"/>
            <p class="c-grey-100">Please enter your Phone </p>
          </div>
          <div class="col ml-16">
            <p class="mt-10 ">Last Name</p>
            <input type="text" placeholder="Email" required v-model="admin.email" class="input_styles w-[220px] mt-2 text-black"/>
            <p class="c-grey-100">Please enter your Email</p>
          </div>
        </div>
        <button class="bg-blue-500 mt-10 p-3 rounded-xl" type="submit">Save Changes</button>
      </div>
    </div>z
      <-- <div class="col ml-10">
        <div class="flex">
          <div class="w-[80%]">
            <h1 class="mt-5 text-xl">My profile</h1>
          </div>
          <div class="justify-end">
          </div>
        </div>
        <p class="mt-5 text-black">First Name</p>
        <input type="text" placeholder="First Name" required  class="input_styles w-[500px] mt-2 text-black p-3 rounded-lg border"/>
        <p class="c-grey-100">Please enter your first name</p>

        <p class="mt-10 text-black">Last Name</p>
        <input type="text" placeholder="Last Name" required  class="input_styles w-[500px] mt-2 text-black p-3 rounded-lg border"/>
        <p class="c-grey-100">Please enter your last name</p>

        <div class="flex">
          <div class="col">
            <p class="mt-10 text-black">Phone</p>
            <input type="text" placeholder="Phone" required class="input_styles w-[220px] mt-2 text-black p-3 rounded-lg border"/>
            <p class="c-grey-100">Please enter your Phone </p>
          </div>
          <div class="col ml-16">
            <p class="mt-10 text-black">Last Name</p>
            <input type="text" placeholder="Email" required  class="input_styles w-[220px] mt-2 text-black p-3 rounded-lg border"/>
            <p class="c-grey-100">Please enter your Email</p>
          </div>
        </div>
        <button class="bg-blue-500 mt-10 p-3 rounded-xl" type="submit">Save Changes</button>
      </div> -->
    <!-- </div> -->
  </main>

  </template>
  
<script setup>
import { useStore } from "vuex";
import { useHome } from "../composables/home";
import Loading from "../components/Loading.vue";
import Button from "../components/base/base-button.vue";
// import profile from "../pages/admin/AdminProfile.vue"
import Navbar from "../components/Navbar.vue";

const store = useStore();
const { products, loading } = useHome();

async function getProfile(){
  const res = localStorage.getItem("user");
  const profile = await store.dispatch("viewProfile")
}
async function GetAdmins(){
  const admins=await store.dispatch('viewAdmins')
}
async function GetUsers(){
  const users=await store.dispatch('viewUsers')
}
async function GetBlockUsersss(){
  const blocks=await store.dispatch('viewBlockUsers')
}
function logout() {
  store.commit("LOGOUT");
}
</script>
