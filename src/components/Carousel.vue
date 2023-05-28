<template>
  <div class="relative isolate overflow-hidden bg-teal-700 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-auto text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Tell your story</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      </div>
      <div class="relative overflow-hidden">
        <div class="flex w-full">
          <div class="carousel-container">
            <ul class="carousel-track">
              <li v-for="(video, index) in videos" :key="index" class="carousel-item w-[500px] h-[300px] p-4 shrink-0">
                <video autoplay loop muted :src="video.src" />
              </li>
            </ul>
          </div>
          <div class="carousel-container">
            <ul class="carousel-track">
              <li v-for="(video, index) in videos" :key="index" class="carousel-item w-[500px] h-[300px] p-4 shrink-0">
                <video autoplay loop muted :src="video.src" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      videos: [
        {
          src: "../src/assets/video/apple-tv-video.mp4"
        },
        {
          src: "../src/assets/video/apple-tv-video.mp4"
        },
        {
          src: "../src/assets/video/apple-tv-video.mp4"
        }
      ]
    };
  },
  mounted() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = 508; // 500px width + 4px padding (2px on each side)
    const trackWidth = itemWidth * carouselItems.length;

    carouselTrack.style.width = `${trackWidth}px`;

    const animation = carouselTrack.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${trackWidth}px)` }
      ],
      {
        duration: 5000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    animation.play();
  }
}
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}
</style>
