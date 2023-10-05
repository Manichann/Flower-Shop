<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/layouts/NavBar.vue'
import FooterLayout from './FooterLayout.vue';
</script>

<template>
  <div class="">
    <NavBar class="sticky top-0" />
    <div>
      <RouterView />
    </div>
    <FooterLayout/>
  </div>
</template>
