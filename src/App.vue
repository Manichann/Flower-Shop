<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './layouts/NavBar.vue';
import FooterLayout from './layouts/FooterLayout.vue';
</script>

<template>
  <div>
    <NavBar class="sticky top-0" />
    <div>
      <RouterView />
    </div>
    <FooterLayout/>
  </div>
</template>
