<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-8 pb-16 sm:pb-20 lg:px-16 lg:pb-20">
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "How much will it cost to film a video for my business",
    answer:
      "Will it have a car chase or a helicopter tumbling through the sky? Do you need things to go boom? Do you need a 2 hour feature film to sell your product? What we're trying to say is our videos are only limited by our imagination...and your budget. While that car chase sounds pretty epic, you may not need that for your business. And let's face it it's very important to keep your finance team happy. Let's talk about what we can create instead which makes the most sense for your business and gets you the most bang for your buck.",
  },
  {
    question: "We know videos are good for marketing but will they really help my sales?",
    answer:
      "Did you know that videos on your website can increase conversion rates by up to 80%? According to Forbes, 90% of customers say video helps them make buying decisions and 64% of customers say that seeing a video makes them more likely to buy. Videos can have a powerful impact on other parts of the buying process too. In fact, studies show that things like product videos help people make up their minds easier than written articles. That's not us making up numbers - people much smarter than us have done the research. And these are stats from last year! If you still have doubts, book a call and let us chat to you about our video marketing services."
  },
  {
    question: "We know videos are good for marketing but will they really help my sales?",
    answer:
      "Did you know that videos on your website can increase conversion rates by up to 80%? According to Forbes, 90% of customers say video helps them make buying decisions and 64% of customers say that seeing a video makes them more likely to buy. Videos can have a powerful impact on other parts of the buying process too. In fact, studies show that things like product videos help people make up their minds easier than written articles. That's not us making up numbers - people much smarter than us have done the research. And these are stats from last year! If you still have doubts, book a call and let us chat to you about our video marketing services."
  }
]
</script>