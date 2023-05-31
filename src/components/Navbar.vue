<template>
  <Disclosure as="nav" class="fixed top-0 w-full z-50 backdrop-blur-md bg-teal-900/50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img class="block h-8 w-auto lg:hidden" src="../assets/am-films-logo.png" alt="Your Company" />
          <img class="hidden h-8 w-auto lg:block" src="../assets/am-films-logo.png" alt="Your Company" />
        </div>
        <!-- Nav links -->
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link to="/" active-class= "bg-orange-400" class="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-orange-400">Home</router-link>
            <router-link to="/about" active-class= "bg-orange-400" class="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-orange-400">Who we  are</router-link>
            <router-link to="/work" active-class= "bg-orange-400" class="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-orange-400">Our work</router-link>
            <router-link to="/blog" active-class= "bg-orange-400" class="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-orange-400">Blog</router-link>
          </div>
        </div>
        <!-- Icon -->
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="-mr-2 flex sm:hidden">
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <!-- Mobile drop down -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton as="router-link" to="/" active-class="bg-orange-400" class="block rounded-lr px-3 py-2 text-base font-medium text-white hover:bg-orange-400">Home</DisclosureButton>
        <DisclosureButton as="router-link" to="/about" active-class="bg-orange-400" class="block rounded-lr px-3 py-2 text-base font-medium text-white hover:bg-orange-400 ">Who we are</DisclosureButton>
        <DisclosureButton as="router-link" to="/work" active-class="bg-orange-400" class="block rounded-lr px-3 py-2 text-base font-medium text-white hover:bg-orange-400 ">Our work</DisclosureButton>
        <DisclosureButton as="router-link" to="/blog" active-class="bg-orange-400" class="block rounded-lr px-3 py-2 text-base font-medium text-white hover:bg-orange-400 ">Blog</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>