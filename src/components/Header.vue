<template>
  <div class="bg-white px-6 pt-24 sm:pt-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl">{{ heading }}</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">{{ subheading }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    heading: String,
    subheading: String
  }
}
</script>