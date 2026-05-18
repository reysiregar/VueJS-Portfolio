<template>
  <main class="portfolio-page">
    <section class="portfolio-hero" :class="showContent ? 'animate-in' : 'is-hidden'">
      <div class="hero-copy">
        <span class="eyebrow">My work</span>
        <h1>Projects built to be useful, fast, and visually direct.</h1>
        <p>
          A compact showcase of recent work spanning portfolio systems, commerce experiments,
          scanning tools, and community sites.
        </p>
      </div>

      <div class="hero-stats">
        <div class="stat-card">
          <span class="stat-value">5</span>
          <span class="stat-label">Featured projects</span>
        </div>
        <div class="stat-card stat-card-accent">
          <span class="stat-value">Vue + React</span>
          <span class="stat-label">Main stacks</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">Live</span>
          <span class="stat-label">Demos available</span>
        </div>
      </div>
    </section>

    <section class="portfolio-grid-wrap" :class="showContent ? 'animate-in delay-1' : 'is-hidden'">
      <div v-if="loading" class="portfolio-grid">
        <div v-for="n in 5" :key="`skeleton-${n}`" class="project-shell">
          <SkeletonCard />
        </div>
      </div>

      <div v-else class="portfolio-grid">
        <article v-for="item in items" :key="item.id" class="project-card">
          <div class="project-media">
            <img
              :src="`/img/${item.imageUrl}.webp`"
              :alt="item.name"
              class="project-image"
              :class="{ loaded: !item.imageLoading }"
              @load="handleImageLoad(item.id)"
              loading="lazy"
              decoding="async"
            />
            <div v-if="item.imageLoading" class="image-placeholder" aria-hidden="true"></div>
          </div>

          <div class="project-body">
            <div class="project-head">
              <h2>{{ item.name }}</h2>
              <p>{{ item.status }}</p>
            </div>

            <div class="project-tech">
              <span>{{ item.tech }}</span>
            </div>

            <div class="project-links">
              <a v-if="item.github !== 'null'" :href="item.github" target="_blank" rel="noreferrer" aria-label="View GitHub repository">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer" aria-label="View live demo">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import SkeletonCard from '@/components/SkeletonCard.vue';

export default {
  components: {
    SkeletonCard,
  },
  props: {
    showContent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: true,
      items: [
        {
          id: 1,
          name: 'Portfolio Website',
          imageUrl: 'portfolio-portfolio-v2',
          imageLoading: true,
          status: 'A personal portfolio used to showcase profile, skills, and work while refining front-end craft.',
          tech: 'VueJS 3, Tailwind',
          github: 'https://github.com/reysiregar/portfolio-v2',
          demo: 'https://reysiregar-portfolio-v2.vercel.app/',
        },
        {
          id: 5,
          name: 'Jewelry Commerce Website',
          imageUrl: 'portfolio-portfolio-v5',
          imageLoading: true,
          status: 'A college team project for browsing and purchasing jewelry products online.',
          tech: 'ReactJS, Tailwind, Express 4, Radix UI',
          github: 'https://github.com/reysiregar/JewelryCommerce',
          demo: 'https://lumiere-commerce.vercel.app',
        },
        {
          id: 3,
          name: 'Halal Scanner Website',
          imageUrl: 'portfolio-portfolio-v4',
          imageLoading: true,
          status: 'A scanning tool for checking food and drink products with quick halal verification.',
          tech: 'ReactJS, Tailwind, Node.js, Express.js, Vite',
          github: 'https://github.com/reysiregar/halal-scanner',
          demo: 'https://ai-halal-scanner.vercel.app',
        },
        {
          id: 4,
          name: 'Church Community Website',
          imageUrl: 'portfolio-portfolio-v3',
          imageLoading: true,
          status: 'A community website for information, events, church services, and related updates.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/reysiregar/nhkbpmj',
          demo: 'https://nhkbpmj.vercel.app',
        },
        {
          id: 2,
          name: 'Christmas Invitation',
          imageUrl: 'portfolio-portfolio-v1',
          imageLoading: true,
          status: 'A private invitation site for sharing event details like location, time, and context.',
          tech: 'JavaScript, SCSS',
          github: 'https://github.com/reysiregar/portfolio-v2',
          demo: 'https://christmas-website-pdd.vercel.app',
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 900);
  },
  methods: {
    handleImageLoad(id) {
      const item = this.items.find((project) => project.id === id);
      if (item) {
        item.imageLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.portfolio-hero,
.portfolio-grid-wrap {
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 8px 8px 0 #111111;
}

.portfolio-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffd84d 0%, #f7f3e8 45%, #53d9a7 100%);
}

.hero-copy,
.hero-stats {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.hero-copy h1 {
  margin: 0;
  max-width: 12ch;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 0.96;
  font-weight: 900;
}

.hero-copy p {
  max-width: 42rem;
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.55;
  font-weight: 600;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.7rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 4px 4px 0 #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-stats {
  justify-content: flex-end;
}

.stat-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.85rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
}

.stat-card-accent {
  background: #ffd84d;
}

.stat-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 900;
}

.stat-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portfolio-grid-wrap {
  padding: 1rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.project-card,
.project-shell {
  height: 100%;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.85rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 5px 5px 0 #111111;
}

.project-media {
  position: relative;
  aspect-ratio: 16 / 9;
  border: 3px solid #111111;
  background: #ebe7db;
  overflow: hidden;
}

.project-image,
.image-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.project-image {
  object-fit: cover;
  opacity: 0;
  transition: opacity 220ms ease;
}

.project-image.loaded {
  opacity: 1;
}

.image-placeholder {
  background:
    linear-gradient(110deg, rgba(17, 17, 17, 0.08) 8%, rgba(17, 17, 17, 0.16) 18%, rgba(17, 17, 17, 0.08) 33%),
    #ebe7db;
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;
}

.project-head h2 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 900;
}

.project-head p {
  margin: 0.45rem 0 0;
  font-size: 0.92rem;
  line-height: 1.55;
  font-weight: 600;
}

.project-tech {
  width: fit-content;
  padding: 0.35rem 0.55rem;
  border: 3px solid #111111;
  background: #ffd84d;
  box-shadow: 3px 3px 0 #111111;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project-links {
  display: flex;
  justify-content: flex-end;
  gap: 0.65rem;
  margin-top: auto;
}

.project-links a {
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  color: #111111;
  box-shadow: 3px 3px 0 #111111;
}

.animate-in {
  animation: riseIn 0.55s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.08s;
}

.is-hidden {
  opacity: 0;
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
}

@media (max-width: 980px) {
  .portfolio-hero,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .portfolio-hero,
  .portfolio-grid-wrap {
    padding: 0.85rem;
  }

  .portfolio-hero {
    gap: 0.85rem;
  }

  .hero-copy h1 {
    max-width: 100%;
    font-size: clamp(1.85rem, 11vw, 2.8rem);
  }

  .hero-copy p {
    font-size: 0.93rem;
  }

  .stat-card {
    padding: 0.65rem 0.75rem;
  }

  .portfolio-grid {
    gap: 0.7rem;
  }

  .project-card {
    padding: 0.75rem;
    box-shadow: 4px 4px 0 #111111;
  }

  .project-head h2 {
    font-size: 1rem;
  }

  .project-head p {
    font-size: 0.88rem;
  }

  .project-tech {
    font-size: 0.68rem;
  }

  .project-links a {
    width: 2.15rem;
    height: 2.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in,
  .image-placeholder {
    animation: none;
  }

  .project-image {
    transition: none;
  }
}
</style>