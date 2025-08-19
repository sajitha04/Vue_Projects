<script setup>
import { RouterView } from "vue-router";
import { Toaster } from "vue-sonner";
import 'vue-sonner/style.css';
import { useColorTheme } from "./composables/useColorTheme";
useColorTheme();
</script>

<template>
  <div class="">
    <RouterView />
    <Toaster position="top-right" />
</div>
</template>
