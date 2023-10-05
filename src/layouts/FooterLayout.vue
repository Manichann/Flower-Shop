<script setup lang="ts">
import type { RouterLink } from 'vue-router';

</script>

<template>
    <div class="px-10 min-[390px]:px-16 sm:px-24 md:px-28 xl:px-32 py-16 sm:py-20 bg-gray-900">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-5">
            <div>
                <h4 class="font-bold text-xl text-white py-4 lg:py-6">About Pisces</h4>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis voluptatibus laborum id, placeat molestias.</p>
            </div>
            <div>
                <h4 class="font-bold text-xl text-white py-4 lg:py-6">Pisces Store</h4>
                <p class="text-white">Open on Mon-Sat <br>
                   204 VC Avenue, <br>
                   Vangvieng, Vientiane</p>
                <p class="py-6 text-white">manichanh@gmail.com</p>
            </div>
            <div>
                <h4 class="font-bold text-xl text-white py-4 lg:py-6">Info</h4>
                <ul>
                    <li><RouterLink :to="{name: 'about'}" class="text-white hover:text-yellow-500">About</RouterLink></li>
                    <li><RouterLink :to="{name: 'blog'}" class="text-white hover:text-yellow-500">Blog</RouterLink></li>
                    <li><RouterLink :to="{name: 'home'}" class="text-white hover:text-yellow-500">Shipping Policy</RouterLink></li>
                    <li><RouterLink :to="{name: 'contact'}" class="text-white hover:text-yellow-500">Contact Us</RouterLink></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-xl text-white py-4 lg:py-6">Quick links</h4>
                <ul>
                    <li><RouterLink :to="{name: 'home'}" class="text-white hover:text-yellow-500">My account</RouterLink></li>
                    <li><RouterLink :to="{name: 'daily'}" class="text-white hover:text-yellow-500">Daily</RouterLink></li>
                    <li><RouterLink :to="{name: 'events'}" class="text-white hover:text-yellow-500">Events</RouterLink></li>
                    <li><RouterLink :to="{name: 'wedding'}" class="text-white hover:text-yellow-500">Weddings</RouterLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
h4 p a{
    color: white;
}
</style>