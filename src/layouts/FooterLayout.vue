<script setup lang="ts">
import type { RouterLink } from 'vue-router'
import { ref } from 'vue'

interface InfoList {
  name: string
  link: string
}

const Infos = ref<InfoList[]>([
  {
    name: 'About',
    link: 'about'
  },
  {
    name: 'Blog',
    link: 'blog'
  },
  {
    name: 'Shipping Policy',
    link: 'soon'
  },
  {
    name: 'Contact Us',
    link: 'contact'
  }
])

interface QuickLink {
  name: string
  link: string
}

const quickLinks = ref<QuickLink[]>([
  {
    name: 'My Account',
    link: 'soon'
  },
  {
    name: 'Daily',
    link: 'daily'
  },
  {
    name: 'Events',
    link: 'events'
  },
  {
    name: 'Weddings',
    link: 'wedding'
  }
])
</script>

<template>
  <div class="px-10 min-[390px]:px-16 sm:px-24 md:px-28 xl:px-32 py-16 sm:py-20 bg-gray-900">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-5">
      <div>
        <h4 class="font-bold text-xl text-white py-4 lg:py-6">About Pisces</h4>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis voluptatibus
          laborum id, placeat molestias.
        </p>
      </div>
      <div>
        <h4 class="font-bold text-xl text-white py-4 lg:py-6">Pisces Store</h4>
        <p class="text-white">
          Open on Mon-Sat <br />
          204 VC Avenue, <br />
          Vangvieng, Vientiane
        </p>
        <p class="py-6 text-white">manichanh@gmail.com</p>
      </div>
      <div>
        <h4 class="font-bold text-xl text-white py-4 lg:py-6">Info</h4>
        <ul>
          <li v-for="(info, idx) of Infos" :key="idx">
            <RouterLink :to="`${info.link}`" class="text-white hover:text-yellow-500">
              {{ info.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-xl text-white py-4 lg:py-6">Quick links</h4>
        <ul>
          <li v-for="(qLinks, idx) of quickLinks" :key="idx">
            <RouterLink :to="`${qLinks.link}`" class="text-white hover:text-yellow-500">
              {{ qLinks.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>