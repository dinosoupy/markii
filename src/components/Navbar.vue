<template>
  <Disclosure as="nav" class="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-shrink-0">
          <img class="block h-8 w-auto lg:hidden" src="../assets/am-films-logo.png" alt="Your Company" />
          <img class="hidden h-8 w-auto lg:block" src="../assets/am-films-logo.png" alt="Your Company" />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</a>
            <a href="/about" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Who we  are</a>
            <a href="/work" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Our work</a>
            <a href="/blog" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Blog</a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton as="a" href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>