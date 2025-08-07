<script setup>
import { RouterLink } from "vue-router";
const name = "";
</script>
<template>
  <div class="bg-blue-500 flex justify-between p-5">
    <div>
    <RouterLink to='/' class="p-5">Home</RouterLink>
    <RouterLink to="/about" class="p-5">About</RouterLink>
    <RouterLink to="/works" class="p-5">Works</RouterLink>
    </div>
    <div>
    <RouterLink to="/contact" class="p-5">Contact Us</RouterLink>
    </div>
    
  </div>
</template>
