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
  <div class="w-full py-10 sm:py-16 md:py-28">
    <p
      class="font-serif text-xl md:text-3xl lg:text-4xl text-black text-center px-10 min-[390px]:px-16 sm:px-24 md:px-28 lg:px-36"
    >
      There’s something in the simple act of being around, and caring for, plants that boost our
      spirits and enhance our environments.
    </p>
    <div>
      <div class="flex flex-col items-center py-10 lg:py-20">
        <ul class="grid lg:grid-cols-3 gap-x-20 text-center">
          <li v-for="(shop, index) of shops" :key="index" class="py-10 lg:py-0">
            <img
              :src="shop.img"
              :alt="shop.alt"
              class="rounded-t-full object-fill w-[16rem] h-[18rem] lg:w-[18rem] lg:h-[20rem]"
            />

            <div class="py-5">
              <RouterLink
                :to="{ name: shop.button }"
                class="text-md md:text-xl uppercase hover:text-yellow-500"
              >
                {{ shop.shop }}
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
