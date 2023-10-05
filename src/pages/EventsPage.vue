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
    <div class="py-16 sm:py-28">
      <div class="flex flex-col md:flex-row gap-y-10 gap-x-24 min-[840px]:gap-x-48 xl:gap-x-80 px-10 min-[390px]:px-16 sm:px-24 md:px-28 lg:px-32 xl:px-40">
        <h1 class="text-red-700 text-4xl sm:text-5xl lg:text-7xl">EVENTS</h1>
        <p class="text-gray-500">
          We think of events to be a fairly broad term. From taking on corporate banquets or small
          company dinners to working with brands for editorial shoots, we do it and we do it all
          while thinking big and out of the box.
        </p>
      </div>
      <div class="my-28 sm:my-48 flex justify-center">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li v-for="(event, index) in datas" :key="index">
          <img :src="event.image" :alt="event.name" class="h-[18rem] sm:h-[22rem] min-[840px]:h-[28rem] lg:h-[26rem] lg:w-[18rem] xl:h-[30rem] xl:w-[22rem] cursor-pointer">
          <div class="pt-4 text-red-700 font-semibold text-lg">{{ event.name }}</div>
          <span>{{ event.price.toLocaleString() }} kip</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
