<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { authStore } from '@/stores/auth'

const { authState } = authStore()

const menus = ref<{ to?: string; label: string; children?: { to: string; label: string }[] }[]>([
  {
    to: 'home',
    label: 'Home'
  },
  {
    label: 'Shop',
    children: [
      {
        to: 'events',
        label: 'Events'
      },
      {
        to: 'wedding',
        label: 'Wedding'
      },
      {
        to: 'daily',
        label: 'Daily'
      }
    ]
  },
  {
    to: 'blog',
    label: 'Blog'
  },
  {
    to: 'about',
    label: 'About'
  },
  {
    to: 'contact',
    label: 'Contact Us'
  }
])
</script>

<template>
  <div class="navbar bg-base-100 shadow-lg h-20">
    <div class="navbar-start">
      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal px-3">
          <li v-for="(menu, index) in menus" :key="index">
            <details v-if="menu.children && menu.children?.length > 0">
              <summary>{{ menu.label }}</summary>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li v-for="(item, idx) in menu.children" :key="idx">
                  <RouterLink :to="{ name: item.to }" active-class="underline">{{ item.label }}</RouterLink>
                </li>
              </ul>
            </details>
              <RouterLink v-else :to="{ name: menu.to }" active-class="underline">{{ menu.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-start lg:hidden">
        <label tabindex="0" class="btn btn-ghost">
          <i class="ri-menu-line text-2xl"></i>
        </label>
        <div class="dropdown-content menu rounded-box shadow bg-white w-32 z-[1] p-2">
          <ul>
            <li v-for="(menu, idx) in menus" :key="idx" tabindex="0">
              <details v-if="menu.children && menu.children?.length > 0">
                <summary>{{ menu.label }}</summary>
                <ul>
                  <li v-for="(item, idx) in menu.children" :key="idx">
                    <RouterLink :to="{ name: item.to }">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </details>
              <summary v-else>
                <RouterLink :to="{ name: menu.to }">{{ menu.label }}</RouterLink>
              </summary>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navbar-center hidden sm:flex">
      <h1 class="text-3xl font-semibold min-[840px]:text-4xl font-serif text-black">Pisces</h1>
    </div>

    <div class="navbar-end gap-x-0 sm:gap-x-3">
      <div class="btn btn-circle">
        <RouterLink to="/soon">
          <i class="ri-user-3-line"></i>
        </RouterLink>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">0</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">0 Items</span>
              <span class="text-black">Subtotal: $0</span>
              <div class="card-actions">
                <button class="btn btn-block bg-gray-900 text-white">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
