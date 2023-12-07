<template>
<div class="flex justify-between  items-center text-left">
  <div class="w-[50%] bg-[#C9AC8C]">
    <img class="w-[90%] h-[100vh]" src="../assets/images/login.svg" alt="">
  </div>
  <form class="w-[50%] h-[400px] px-40 flex flex-col gap-[20px]" @submit.prevent="onSubmit">
    <h2 class="text-5xl font-semibold">Sign in</h2>
    <p>Do not you have an account? <a class=" text-[#549FF9]" href="#">Sign up</a></p>
      <Input id="email" placeholder="Email" required v-model="email"/>
      <Input id="password" placeholder="Password" type="password" required v-model="password"/>
      <Button type="submit" class="bg-[#152540] p-4 text-white rounded-[30px]">Next step</Button>
  </form>
</div>
</template>

<script setup>
  import { ref } from "vue";
  import { useStore } from "vuex";
  import Input from "../components/base/base-input.vue";
  import Button from "../components/base/base-button.vue";
  const store = useStore();

  const email = ref("kminchelle");
  const password = ref("0lelplR");

  async function onSubmit() {
    if (!email.value.length && !password.value.length) {
      return;
    }
    await store.dispatch("login", {
      email: email.value,
      password: password.value,
    });
  }
</script>