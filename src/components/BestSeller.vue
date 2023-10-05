<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface BestSellerList {
  img: string
  label: string
  price: string
}

const bestSeller = ref<BestSellerList[]>([
  {
    img: 'https://th.bing.com/th/id/OIP.Jr6turPVJD4mUFuQTLreawHaIg?pid=ImgDet&rs=1',
    label: 'Pink rose bouquet',
    price: '159,000 kip'
  },
  {
    img: 'https://i.pinimg.com/originals/d8/1d/70/d81d7090331ec479544b73aeaadfa599.jpg',
    label: 'Daisy wedding bouquet',
    price: '139,000 kip'
  },
  {
    img: 'https://i.pinimg.com/originals/41/26/86/412686ba554fec69d262927959380d8e.jpg',
    label: 'Blue spring bridal bouquet',
    price: '129,000 kip'
  },
  {
    img: 'https://www.krokus.lv/repository/products/582/1556/1556-original.jpg',
    label: 'White tulip bouquet',
    price: '119,000 kip'
  }
])
</script>

<template>
  <div class="py-10 sm:py-16 md:py-20">
    <h1 class="font-serif font-semibold text-4xl md:text-5xl min-[840px]:text-5xl text-center">Best Sellers</h1>
    <p class="font-serif text-xl md:text-3xl xl:text-4xl text-center py-10 px-10 min-[390px]:px-16 sm:px-24 md:px-28 xl:px-36">
      Transform your home or office with our gorgeous best-selling seasonal arrangements.
    </p>
    <div class="flex justify-center py-10">
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 ">
        <li v-for="(bestSale, index) of bestSeller" :key="index">
          <img class="object-fill h-72 w-60 md:h-[20rem] md:w-[16rem]" :src="bestSale.img" :alt="bestSale.label" />
          <div class="pt-4 text-red-700 font-semibold text-lg">{{ bestSale.label }}</div>
          <span>{{ bestSale.price }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
