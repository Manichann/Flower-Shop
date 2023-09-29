<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { products, type Product } from '@/data/product'

const datas = ref<Product[]>(products)

onMounted(() => {
  datas.value = products.filter((pro) => pro.category.some((cat) => cat.id === 'C03'))
})
</script>

<template>
  <div>
    <div class="px-20 py-28">
      <div class="grid grid-cols-2 gap-x-48">
        <h1 class="text-red-700 text-7xl">WEDDING</h1>
        <p class="text-gray-500">
          So we offer new ways to infuse this restorative beauty into as many everyday rituals as
          possible, through biophilic design that increases your connection to the natural world. It
          will ground you, fortify you and light you up.
        </p>
      </div>
      <div class="my-48">
        <ul class="grid grid-cols-3 gap-8">
          <li v-for="(wedding, index) in datas" :key="index">
            <img
              :src="wedding.image"
              :alt="wedding.name"
              class="w-[25rem] h-[34rem] cursor-pointer"
            />
            <div class="pt-4 text-red-700 font-semibold text-lg">{{ wedding.name }}</div>
            <span>{{ wedding.price.toLocaleString() }} kip</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
