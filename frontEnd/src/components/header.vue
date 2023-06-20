<template>
  <div>
    <div class="w-full bg-white  top-5 p-1  font-poppins flex items-start justify-around text-sm">
     <div class="w-36">
        <img class="w-full " src="../assets/logo.png"/>
     </div>
     <div class="md:flex hidden  justify-center  items-center gap-1  lg:gap-4">
        <div class=" cursor-pointer flex items-center justify-center p-1 lg:px-3 px-1 gap-1">Features</div>
        <div class=" cursor-pointer flex i  tems-center justify-center p-1 lg:px-3 px-1 gap-1">How it works</div>
        <div class=" cursor-pointer flex items-center justify-center p-1 lg:px-3 px-1 gap-1">Pricing</div>
        <div class=" cursor-pointer flex items-center justify-center p-1 lg:px-3 px-1 gap-1">Learn </div>
        <div class=" cursor-pointer flex items-center justify-center p-1 lg:px-3 px-1 gap-1"> Log in</div>
     </div>
     <div class=" md:hidden w-full p-2 flex flex-col justify-center  px-20 items-end gap-1  ">
            <svg @click="show=!show" :class="` ${show?'rotate-90 ':' '}  transition-all duration-300 w-8 h-8 fill-indigo-700 cursor-pointer`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            <div :class="` ${!show?' h-0 ':' p-1 h-40 '} overflow-hidden gap-1 px-4 flex  transition-all duration-300  flex-col w-full`">
        <div class=" bg-[#fee471] rounded-lg shadow-lg p-1 hover:opacity-80 hover:scale-110 transition-all duration-200  cursor-pointer flex items-center justify-center lg:px-3 px-1 gap-1">Features</div>
        <div class=" bg-[#fee471] rounded-lg shadow-lg p-1 hover:opacity-80 hover:scale-110 transition-all duration-200  cursor-pointer flex items-center justify-center lg:px-3 px-1 gap-1">How it works</div>
        <div class=" bg-[#fee471] rounded-lg shadow-lg p-1 hover:opacity-80 hover:scale-110 transition-all duration-200  cursor-pointer flex items-center justify-center lg:px-3 px-1 gap-1">Pricing</div>
        <div class=" bg-[#fee471] rounded-lg shadow-lg p-1 hover:opacity-80 hover:scale-110 transition-all duration-200  cursor-pointer flex items-center justify-center lg:px-3 px-1 gap-1">Learn </div>
        <div class=" bg-[#fee471] rounded-lg shadow-lg p-1 hover:opacity-80 hover:scale-110 transition-all duration-200  cursor-pointer flex items-center justify-center lg:px-3 px-1 gap-1"> Log in</div>
    </div>
     </div>
     <div class="hidden md:flex hover:opacity-80 cursor-pointer  items-center justify-center p-2 gap-1 bg-[#fee471] px-6 rounded-3xl"> try it free</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let show =ref(false)
</script>
<style scoped></style>