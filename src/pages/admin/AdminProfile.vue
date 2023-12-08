i<script setup>
import { useStore } from "vuex";
import { useHome } from "/src/composables/home";
import Loading from "/src/components/Loading.vue";
import Button from "/src/components/base/base-button.vue";

const store = useStore();
const { products, loading } = useHome();

function logout() {
  store.commit("LOGOUT");
}
    import {ref} from 'vue'
    import router from "/src/router";
    const admin = ref([])
    admin.value = JSON.parse(localStorage.getItem('user'));
    console.log(admin)


    const DeletedToken = async()=>{
      localStorage.clear()
      ({name:'login'})
    }

</script>

<template>
  <main class="admin-profile ">
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
    </div>
  </main>
</template>
<style></style>