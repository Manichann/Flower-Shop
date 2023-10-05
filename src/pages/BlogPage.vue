<script setup lang="ts">
import { ref } from 'vue'
interface blogList {
  image: string
  date: string
  title: string
  text: string
}

const blogs = ref<blogList[]>([
  {
    image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/04/bp-f4.jpg',
    date: 'APRIL 4, 2022',
    title: 'The Gift of Memory',
    text: 'Not only are flowers a beautiful sight to be surrounded by, but they can also evoke happy memories, therefore lifting us out of bad moods. The colour of a pink lily may remind you of a family member, or a string of gladioli may bring back distant memories of friendship.'
  },
  {
    image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/04/bp-f3.jpg',
    date: 'APRIL 4, 2022',
    title: 'Lush Bouquet',
    text: 'Blooming flowers are one of the most natural forms of life, and as they grow, the reproduction cycle is happening.  Flowers represent life; looking at them and being surrounded by them is said to give a feeling of new life, new beginnings and rejuvenation'
  },
  {
    image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/bp-f2.jpg',
    date: 'MARCH 30, 2022',
    title: 'Space to Flourish',
    text: 'We likely all agree that a bouquet of fresh flowers makes a space more inviting. Whether a romantic bursting bundle or a simple low arrangement on a candlelit table, they add a touch of natural beauty.'
  }
])
</script>

<template>
  <div class="flex flex-col items-center px-10 min-[390px]:px-16 sm:px-28 py-16 md:py-28">
  <ul class="grid grid-cols-1 lg:grid-cols-3 gap-5">
    <li v-for="(blog, idx) of blogs" :key="idx" class="">
      <div class="py-10 grid gridr">
        <img :src="blog.image" class="object-fill w-[16rem] md:w-[20rem] lg:w-[26rem]" />
        <p class="text-xs pt-4 font-serif pb-10">{{ blog.date }}</p>
        <h1 href="#" class="text-red-800 text-2xl md:text-3xl font-serif">{{ blog.title }}</h1>
        <p class="text text-sm md:text-base pt-8 pb-6">{{ blog.text }}</p>
        <a href="#" class="text-red-800">Read more</a>
      </div>
    </li>
  </ul>
</div>
</template>
