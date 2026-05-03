<template>
  <main class="blog-page">
    <section class="blog-hero" :class="showContent ? 'animate-in' : 'is-hidden'">
      <div class="hero-copy">
        <span class="eyebrow">Blog</span>
        <h1>Short reads, stories, and lessons from learning and building.</h1>
        <p>
          A compact feed of writing around technology, education, and personal observations.
        </p>
      </div>

      <aside class="sidebar-card">
        <p class="sidebar-text">Let’s share experiences, stories, and knowledge together.</p>
        <div class="divider"></div>
        <div class="topics-block">
          <span class="topics-title">Topics</span>
          <div class="topic-list">
            <span>NodeJS</span>
            <span>Technology</span>
            <span>Education</span>
          </div>
        </div>
      </aside>
    </section>

    <section class="article-list-wrap" :class="showContent ? 'animate-in delay-1' : 'is-hidden'">
      <article v-for="article in articles" :key="article.id" class="article-card">
        <a :href="article.link" target="_blank" rel="noreferrer" class="article-link">
          <div class="article-content">
            <div class="article-meta">
              <span class="article-date">{{ article.date }}</span>
            </div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.desc }}</p>
          </div>

          <div class="article-image-shell">
            <div v-if="article.imageLoading" class="image-placeholder"></div>
            <img
              :src="article.image"
              :alt="article.title"
              class="article-image"
              :class="{ loaded: !article.imageLoading }"
              loading="lazy"
              decoding="async"
              @load="article.imageLoading = false"
              @error="article.imageLoading = false"
            />
          </div>
        </a>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    showContent: {
      type: Boolean,
      default: false,
    },
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
          link: 'https://www.kompasiana.com/reysiregar24/668d371434777c06dc4407c3/kebocoran-data-pdns-di-indonesia-ancaman-keamanan-siber-yang-semakin-nyata',
          imageLoading: true,
        },
        {
          id: 2,
          title: 'Karangan Non-Ilmiah berupa Cerpen',
          date: '2024-07-05',
          desc: 'Meniti Impian di Antara Bahasa dan Teknologi.',
          image: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hk1q0ajqbrq821k4xp5np1hy.jpg',
          link: 'https://reyeducations.blogspot.com/2024/07/karangan-non-ilmiah-berupa-cerpen.html',
          imageLoading: true,
        },
        {
          id: 3,
          title: 'Apa itu Bullying dan Dampaknya?',
          date: '2023-11-11',
          desc: 'Bahaya dari dampak Bullying dan Bagaimana kita harus menanggapinya.',
          image: 'https://cdn1-production-images-kly.akamaized.net/nvfAWzIlggPtzIpkXZn3Vp5BGYg=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4556789/original/003397600_1693370707-8845717_4014587_1_.jpg',
          link: 'https://reyeducations.blogspot.com/2023/10/halo-semua-perkenalkan-nama-saya.html',
          imageLoading: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-hero,
.article-list-wrap {
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 8px 8px 0 #111111;
}

.blog-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffd84d 0%, #f7f3e8 50%, #53d9a7 100%);
}

.hero-copy,
.sidebar-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.hero-copy h1 {
  margin: 0;
  max-width: 14ch;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 0.96;
  font-weight: 900;
}

.hero-copy p,
.sidebar-text {
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

.sidebar-card {
  padding: 0.9rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
}

.divider {
  height: 3px;
  width: 4rem;
  background: #111111;
}

.topics-block {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.topics-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.topic-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-list span {
  padding: 0.45rem 0.65rem;
  border: 3px solid #111111;
  background: #ffd84d;
  box-shadow: 3px 3px 0 #111111;
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
}

.article-list-wrap {
  padding: 1rem;
}

.article-card + .article-card {
  margin-top: 0.85rem;
}

.article-link {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 10rem;
  gap: 1rem;
  padding: 0.85rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 5px 5px 0 #111111;
  color: #111111;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.article-date {
  display: inline-flex;
  width: fit-content;
  padding: 0.2rem 0.45rem;
  border: 2px solid #111111;
  background: #ff5c4d;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.article-content h2 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  line-height: 1.2;
}

.article-content p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  font-weight: 600;
}

.article-image-shell {
  position: relative;
  aspect-ratio: 1 / 1;
  border: 3px solid #111111;
  background: #ebe7db;
  overflow: hidden;
}

.article-image,
.image-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.article-image {
  object-fit: cover;
  opacity: 0.15;
  transition: opacity 220ms ease;
}

.article-image.loaded {
  opacity: 1;
}

.image-placeholder {
  background: linear-gradient(110deg, rgba(17, 17, 17, 0.08) 8%, rgba(17, 17, 17, 0.16) 18%, rgba(17, 17, 17, 0.08) 33%), #ebe7db;
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
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

@media (max-width: 900px) {
  .blog-hero,
  .article-link {
    grid-template-columns: 1fr;
  }

  .article-image-shell {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 640px) {
  .blog-hero,
  .article-list-wrap {
    padding: 0.85rem;
  }

  .blog-hero {
    gap: 0.85rem;
  }

  .hero-copy h1 {
    max-width: 100%;
    font-size: clamp(1.85rem, 11vw, 2.8rem);
  }

  .hero-copy p,
  .sidebar-text {
    font-size: 0.93rem;
  }

  .topic-list span {
    padding: 0.35rem 0.55rem;
    font-size: 0.68rem;
  }

  .article-list-wrap {
    padding-top: 0.75rem;
  }

  .article-link {
    padding: 0.75rem;
    gap: 0.8rem;
    box-shadow: 4px 4px 0 #111111;
  }

  .article-content h2 {
    font-size: 1rem;
  }

  .article-content p {
    font-size: 0.88rem;
  }

  .article-image-shell {
    border-width: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in,
  .image-placeholder {
    animation: none;
  }

  .article-image {
    transition: none;
  }
}
</style>