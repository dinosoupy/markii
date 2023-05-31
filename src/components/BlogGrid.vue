<template>
  <div class="bg-white py-24 sm:py-32 flex justify-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl">AM Films blog</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor set amet.</p>
      </div>
      <!-- Blog Post grid -->
      <div class="mx-auto mt-10 grid w-full md:max-w-2xl lg:max-w-6xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-3">
        <!-- Blog Post cards -->
        <article v-for="post in posts" :key="post.id" class="flex max-w-sm flex-col items-start justify-between">
          <div class="relative w-full">
            <img :src="post.imageUrl" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="w-full max-w-xl bg-teal-200 p-6 rounded-b-2xl">
            <div class="mb-2 flex items-center gap-x-4 text-xs">
              <p class="text-gray-500 font-semibold">{{ post.category }}</p>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-xl font-semibold leading-6 text-black group-hover:text-gray-600">
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h3>
            </div>
            <div class="mt-2 flex items-center gap-x-4 text-xs">
              <p class="text-gray-500 font-semibold">{{ post.date }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>


<script setup>
const posts = [
  {
    id: 1,
    imageUrl: '@/assets/image/blog-thumbnail.jpeg',
    title: 'Boost your conversion rate Boost your conversion rate Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: 'Marketing',
  },
  {
    id: 1,
    imageUrl: '@/assets/image/blog-thumbnail.jpeg',
    title: 'Boost your conversion rate Boost your conversion rate Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: 'Marketing',
  },
  {
    id: 1,
    imageUrl: '@/assets/image/blog-thumbnail.jpeg',
    title: 'Boost your conversion rate Boost your conversion rate Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: 'Marketing',
  },
  {
    id: 1,
    imageUrl: '@/assets/image/blog-thumbnail.jpeg',
    title: 'Boost your conversion rate Boost your conversion rate Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: 'Marketing',
  },
  // More posts...
]
</script>