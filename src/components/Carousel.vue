<template>
  <div class="relative isolate overflow-hidden bg-teal-700 py-24 sm:py-32">
    <div class="mx-auto max-w-9xl px-0 lg:px-0">
      <div class="mx-auto max-w-2xl lg:mx-auto text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Tell your story</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      </div>
      <div class="carousel-wrapper flex overflow-x-hidden pt-16 sm:pt-24">
        <div class="tape shrink-0 p-0 grid grid-cols-1 relative w-full" ref="tape">
          <ul class="flex flex-row flex-evenly list-none m-0 ps-0">
            <li v-for="(video, index) in videos" :key="index" class="slot mr-6">
              <video autoplay loop muted :src="video.src" class="rounded-lg"/>
            </li>
          </ul>
        </div>
        <div class="tape shrink-0 p-0 grid grid-cols-1 relative w-full" ref="tape">
          <ul class="flex flex-row flex-evenly list-none m-0 ps-0">
            <li v-for="(video, index) in videos" :key="index" class="slot mr-6">
              <video autoplay loop muted :src="video.src" class="rounded-lg"/>
            </li>
          </ul>
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
      videos: []
    };
  },
  mounted() {
    this.setVideosArray(); // Set the initial videos array
    window.addEventListener('resize', this.setVideosArray); // Update videos array on window resize

    const tapeWidth = this.$refs.tape.offsetWidth;
    console.log(tapeWidth)
    let moveTape = anime({
      targets: '.tape',
      translateX: -tapeWidth,
      duration: 5000,
      easing: 'linear',
      loop: true
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setVideosArray); // Remove event listener on component destroy
  },
  methods: {
    setVideosArray() {
      // Check the screen width and set the videos array accordingly
      if (window.innerWidth < 768) {
        this.videos = [
          { src: "../src/assets/video/apple-tv-video.mp4" },
          { src: "../src/assets/video/apple-tv-video.mp4" },
        ];
      } else {
        this.videos = [
          { src: "../src/assets/video/apple-tv-video.mp4" },
          { src: "../src/assets/video/apple-tv-video.mp4" },
          { src: "../src/assets/video/apple-tv-video.mp4" },
          { src: "../src/assets/video/apple-tv-video.mp4" },
        ];
      }
    }
  }
}

</script>
