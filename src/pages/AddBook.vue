<template>
    <div class="flex bg-cover text-white justify-center items-center" style="background-image:url('/src/assets/images/TRINITI KOLLEJI KUTUBXONASI1.png');height: 800px;">
      <div class="col ml-10">
        <div class="flex">
          <div class="w-[80%]">
            <h1 class="mt-5 text-xl">My profile</h1>
          </div>
          <div class="justify-end">
          </div>
        </div>
        <p class="mt-5 text-black">First Name</p>
        <input type="text" placeholder="First Name" required  class="input_styles w-[500px] mt-2 text-black p-3 rounded-mg border"/>
        <p class="c-grey-100">Please enter your first name</p>

        <p class="mt-10 text-black">Last Name</p>
        <input type="text" placeholder="Last Name" required  class="input_styles w-[500px] mt-2 text-black p-3 rounded-mg border"/>
        <p class="c-grey-100">Please enter your last name</p>

        <div class="flex">
          <div class="col">
            <p class="mt-10 text-black">Phone</p>
            <input type="text" placeholder="Phone" required class="input_styles w-[220px] mt-2 text-black p-3 rounded-mg border"/>
            <p class="c-grey-100">Please enter your Phone </p>
          </div>
          <div class="col ml-16">
            <p class="mt-10 text-black">Last Name</p>
            <input type="text" placeholder="Email" required  class="input_styles w-[220px] mt-2 text-black p-3 rounded-mg border"/>
            <p class="c-grey-100">Please enter your Email</p>
          </div>
        </div>
        <button class="bg-blue-500 mt-10 p-3 rounded-xl" type="submit">Save Changes</button>
      </div>
    </div>
</template>