<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in articles" :key="article.id">
            <a :href="article.link" target="_blank" class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                  <div class="h-[1px] w-20 bg-blue-200 md:w-5 aos-init aos-animate mr-2"></div> {{ article.date }}
                </div>
                <h1 class="text-sm md:text-md text-blue-200 font-bold mb-2 paraf">{{ article.title }}</h1>
                <div class="text-sm hidden md:block paraf">{{ article.desc }}</div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <div v-if="article.imageLoading" class="w-full aspect-video bg-gray-700 rounded-xl animate-pulse"></div>
                  <img v-show="!article.imageLoading" @load="article.imageLoading = false" :src="article.image" class="rounded-lg md:rounded-xl" :alt="article.title">
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-blue-300 text-transparent">Let's share experiences,
            stories, and knowledge together.
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-blue-200 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">Topics</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">NodeJS</span>
              <span class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Technology</span>
              <span class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Education</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Kebocoran Data PDNS di Indonesia',
          date: '2024-07-09',
          desc: 'Ancaman Keamanan Siber yang Semakin Nyata.',
          image: 'https://assets.kompasiana.com/items/album/2024/07/09/source-image-668d3680ed641554ec796102.png?t=o&v=770',
          link: 'https://www.kompasiana.com/reysiregar24/668d371434777c06dc4407c3/kebocoran-data-pdns-di-indonesia-ancaman-keamanan-siber-yang-semakin-nyata'
        },
        {
          id: 2,
          title: 'Karangan Non-Ilmiah berupa Cerpen',
          date: '2024-07-05',
          desc: 'Meniti Impian di Antara Bahasa dan Teknologi.',
          image: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hk1q0ajqbrq821k4xp5np1hy.jpg',
          link: 'https://reyeducations.blogspot.com/2024/07/karangan-non-ilmiah-berupa-cerpen.html'
        },
        {
          id: 3,
          title: 'Apa itu Bullying dan Dampaknya?',
          date: '2023-11-11',
          desc: 'Bahaya dari dampak Bullying dan Bagaimana kita harus menanggapinya.',
          image: 'https://cdn1-production-images-kly.akamaized.net/nvfAWzIlggPtzIpkXZn3Vp5BGYg=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4556789/original/003397600_1693370707-8845717_4014587_1_.jpg',
          link: 'https://reyeducations.blogspot.com/2023/10/halo-semua-perkenalkan-nama-saya.html'
        }
      ]
    }
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
    display: flex;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .fade-zoom-up {
    animation: none;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>