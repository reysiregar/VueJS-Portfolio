<script>
import SkeletonCard from '@/components/SkeletonCard.vue';

export default {
  components: {
    SkeletonCard
  },
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 1,
      loading: true,
      items: [
        {
          id: 1,
          name: 'Portfolio Website',
          imageUrl: 'portfolio-v2',
          imageLoading: true,
          status: 'I created my portfolio website to showcase my profile, skills, and projects, while also providing a space to implement and refine my web development expertise.',
          tech: 'VueJS 3, Tailwind',
          github: 'https://github.com/reysiregar/portfolio-v2',
          demo: 'https://reysiregar-portfolio-v2.vercel.app/'
        },
        {
          id: 2,
          name: 'Christmas Invitation',
          imageUrl: 'portfolio-v1',
          imageLoading: true,
          status: 'Website of Christmas Invitation for My Church, giving guest the Event details like location, date & time, etc. (Private Project -> Wanna have the code? Contact me for more information.)',
          tech: 'JavaScript, SCSS',
          github: 'https://github.com/reysiregar/portfolio-v2',
          demo: 'https://christmas-website-pdd.vercel.app'
        },
        {
          id: 3,
          name: 'Church Community Website',
          imageUrl: 'portfolio-v3',
          imageLoading: true,
          status: 'I created this website for my church community to provide information about the community, events, church services, and other relevant information.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/reysiregar/nhkbpmj',
          demo: 'https://nhkbpmj.vercel.app'
        },
        {
          id: 4,
          name: 'Halal Scanner Website',
          imageUrl: 'portfolio-v4',
          imageLoading: true,
          status: 'Halal Scanner lets you check food and drink products in seconds — just snap or upload the ingredients list and get instant halal verification.',
          tech: 'ReactJS, Tailwind, Node.js, Express.js, Vite',
          github: 'https://github.com/reysiregar/halal-scanner',
          demo: 'https://ai-halal-scanner.vercel.app'
        },
        {
          id: 5,
          name: 'Jewelry Commerce Website',
          imageUrl: 'portfolio-v5',
          imageLoading: true,
          status: 'Lumiere Commerce is a college team project. This website allows users to browse and purchase various jewelry products online.',
          tech: 'ReactJS, Tailwind, Express 4, Radix UI',
          github: 'https://github.com/reysiregar/JewelryCommerce',
          demo: 'https://lumiere-commerce.vercel.app'
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-blue-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Current Project</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-300">
            Explore the projects I've worked on so far</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <!-- Skeleton Loaders -->
            <template v-if="loading">
              <div v-for="n in 4" :key="`skeleton-${n}`" class="h-full">
                <SkeletonCard />
              </div>
            </template>
            
            <!-- Actual Project Cards -->
            <div v-else v-for="item in items" :key="item.id" class="h-full">
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-blue-50 md:gap-3 px-5 py-5 lg:px-5 h-full">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <div v-if="item.imageLoading" class="w-full aspect-video bg-gray-700 rounded-xl animate-pulse"></div>
                  <img v-show="!item.imageLoading" @load="item.imageLoading = false" :alt="item.name" decoding="async" data-nimg="1" class="drop-shadow-xl rounded rounded-xl"
                    :src="'/img/portfolio-' + item.imageUrl + '.webp'">
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg flex-grow">
                  <div class="title-text font-medium text-secondary">{{ item.name }}
                  </div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                  <div class="w-full mt-auto pt-4 text-normal text-sm text-left text-blue-200">
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end mt-2">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a v-if="item.github !== 'null'"
                        :href="item.github" target="_blank" rel="noreferrer"
                        title="View github repository" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg></a>
                        <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="View finished project" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</div></template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #add8e6;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .fade-zoom-in {
    animation: none;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>