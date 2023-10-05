<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { products, type Product } from '@/data/product';

const datas = ref<Product[]>(products)

onMounted(() => {
  datas.value = products.filter((pro) => pro.category.some((cat) => cat.id === 'C01'))
})

</script>

<template>
  <div>
    <div class="py-16 sm:py-28">
      <div class="flex flex-col md:flex-row gap-y-10 gap-x-24 min-[840px]:gap-x-48 xl:gap-x-80 px-10 min-[390px]:px-16 sm:px-24 md:px-28 lg:px-32 xl:px-40">
        <h1 class="text-red-700 text-4xl sm:text-5xl lg:text-7xl">DAILY</h1>
        <p class="text-gray-500">
          So we offer new ways to infuse this restorative beauty into as many everyday rituals as
          possible, through biophilic design that increases your connection to the natural world. It
          will ground you, fortify you and light you up.
        </p>
      </div>
      <div class="my-28 sm:my-48 flex justify-center">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li v-for="(daily, index) in datas" :key="index">
            <img :src="daily.image" :alt="daily.name" class="h-[18rem] sm:h-[22rem] min-[840px]:h-[28rem] lg:h-[26rem] lg:w-[18rem] xl:h-[30rem] xl:w-[22rem] cursor-pointer" />
            <div class="pt-4 text-red-700 font-semibold text-lg">{{ daily.name }}</div>
            <span>{{ daily.price.toLocaleString() }} kip</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

