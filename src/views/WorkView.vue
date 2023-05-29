<template>
  <Hero />
  <Header heading="Trusted by the best" subheading="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua." />
  <LogoCloud />
  <Header heading="What we bring to the table" subheading="" />
  <FeatureGrid />
  <Header heading="We get results" />
  <Stats />
  <Carousel />
  <Header heading="Questions? Answers." subheading="" />
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

export default {
  name: 'HomeView',
  components: {
    Hero,
    LogoCloud,
    Carousel,
    Header,
    Stats,
    FeatureGrid,
    Faq,
    Footer
  }
}
</script>