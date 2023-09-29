<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { products, type Product } from '@/data/product';

const datas = ref<Product[]>(products)

onMounted(() => {
  datas.value = products.filter((pro) => pro.category.some((cat) => cat.id === 'C02'))
})
</script>

<template>
  <div>
    <div class="px-20 py-28">
      <div class="grid grid-cols-2 gap-x-48">
        <h1 class="text-red-700 text-7xl">EVENTS</h1>
        <p class="text-gray-500">
          We think of events to be a fairly broad term. From taking on corporate banquets or small
          company dinners to working with brands for editorial shoots, we do it and we do it all
          while thinking big and out of the box.
        </p>
      </div>
      <div class="my-48 ">
        <ul class="grid grid-cols-3 gap-8">
          <li v-for="(event, index) in datas" :key="index">
          <img :src="event.image" :alt="event.name" class="w-[25rem] h-[34rem]">
          <div class="pt-4 text-red-700 font-semibold text-lg">{{ event.name }}</div>
          <span>{{ event.price.toLocaleString() }} kip</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
