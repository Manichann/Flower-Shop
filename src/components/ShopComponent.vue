<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

interface ShopList {
  img: string
  alt: string
  button: string
  shop: string
}

const shops = ref<ShopList[]>([
  {
    img: 'https://cdn.notonthehighstreet.com/system/product_images/images/002/319/974/normal_basil-bouquet.jpg',
    alt: 'events',
    button: 'events',
    shop: 'Events'
  },
  {
    img: 'https://th.bing.com/th/id/OIP.b6k5CTYIGvKQObbw0DzIcwHaIg?pid=ImgDet&rs=1',
    alt: 'wedding',
    button: 'wedding',
    shop: 'Wedding'
  },
  {
    img: 'https://i5.walmartimages.com/asr/53317bbb-7351-468d-8c69-5b8c47173211.3c361336290be9a5a91158390831b2e6.jpeg',
    alt: 'daily',
    button: 'daily',
    shop: 'Daily'
  }
])
</script>

<template>
  <div class="w-full py-28">
    <p class="font-serif text-5xl text-black text-center px-28">
      There’s something in the simple act of being around, and caring for, plants that boost our
      spirits and enhance our environments.
    </p>
    <div>
      <ul class="grid grid-cols-3 my-20">
        <li class="flex flex-col items-center px-16" v-for="(shop, index) of shops" :key="index">
          <img :src="shop.img" :alt="shop.alt" class="rounded-t-full object-fill h-96 w-96" />
          <RouterLink :to="{ name: shop.button }" class="text-2xl hover:text-yellow-500 py-5">
            {{ shop.shop }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
