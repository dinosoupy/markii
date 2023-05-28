<template>
  <Hero />
  <Header heading="Trusted by the best" subheading="  " />
  <LogoCloud />
  <Header heading="What we bring to the table" subheading="  " />
  <FeatureGrid />
  <Header heading="We get results" />
  <Stats />
  <Carousel />
  <!-- <FeatureCarousel /> -->
  <Header heading="Questions? Answers." subheading="  " />
  <Faq />
  <Footer />
</template>

<script>
import Hero from '@/components/Hero.vue'
import LogoCloud from '@/components/LogoCloud.vue'
import Carousel from '@/components/Carousel.vue'
import Header from '@/components/Header.vue'
import Stats from '@/components/Stats.vue'
import FeatureGrid from '@/components/FeatureGrid.vue'
import Faq from '@/components/Faq.vue'
import Footer from '@/components/Footer.vue'
import FeatureCarousel from '@/components/FeatureCarousel.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    LogoCloud,
    Carousel,
    Header,
    Stats,
    FeatureGrid,
    FeatureCarousel,
    Faq,
    Footer
  }
}
</script>