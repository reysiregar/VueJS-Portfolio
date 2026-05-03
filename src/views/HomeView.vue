<template>
  <main class="home-grid" itemscope itemtype="https://schema.org/Person">
    <section class="home-copy" itemscope itemtype="https://schema.org/Person">
      <p :class="['eyebrow', showContent ? 'animate-fade-up' : 'opacity-0']">Welcome to my portfolio website</p>
      <h1 :class="['hero-title', showContent ? 'animate-fade-up' : 'opacity-0']" itemprop="name">Reynaldi Siregar</h1>
      <div class="py-1">
        <TypeWriter 
          :phrases="roles"
          :period="2000"
          :class="['hero-role', showContent ? 'animate-fade-up' : 'opacity-0']"
        />
        <meta itemprop="jobTitle" content="Front-End Web Developer">
      </div>
      <p :class="['hero-description', showContent ? 'animate-fade-up' : 'opacity-0']" itemprop="description">
        A passionate website developer crafting clean, modern web experiences. I love building interfaces that are both beautiful and functional.
        <span class="wave" role="img" aria-label="Waving hand emoji">👋🏼</span>
      </p>
      <div class="hero-actions" :class="showContent ? 'animate-fade-bot' : 'opacity-0'">
        <ResumeButton :resume-path="resumePath" />
        <a href="/portfolio" class="secondary-cta">See selected work</a>
      </div>
    </section>
    <div class="profile-shell" :class="showContent ? 'animate-fade-right' : 'opacity-0'">
      <div class="profile-card">
        <div class="profile-badge">Available for freelance / internships</div>
        <img 
          alt="Reynaldi Wiratama Siregar - Front-End Web Developer from Bekasi, Indonesia" 
          fetchpriority="high" 
          width="320" 
          height="320" 
          decoding="async" 
          class="profile-picture" 
          src="/img/profile.webp"
          itemprop="image"
        >
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import TypeWriter from '../components/TypeWriter.vue'
import ResumeButton from '../components/ResumeButton.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TypeWriter,
    ResumeButton
  },
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      roles: [
        "Front-End Developer",
        "Website Developer",
        "Information System Student",
        "IT Enthusiast"
      ],
      resumePath: '/CV_REYNALDI_SIREGAR.pdf',
    }
  }
})
</script>

<style scoped>
.home-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
  min-height: calc(100vh - 8rem);
}

.home-copy {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
}

.eyebrow,
.hero-role,
.hero-description {
  font-family: 'Space Grotesk', sans-serif;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.8rem;
  border: 3px solid #111111;
  background: #53d9a7;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  box-shadow: 5px 5px 0 #111111;
}

.hero-title {
  max-width: 10ch;
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.25rem, 8vw, 7rem);
  line-height: 0.92;
  font-weight: 900;
  letter-spacing: -0.06em;
}

.hero-role {
  display: inline-block;
  padding: 0.35rem 0.65rem;
  background: #ffd84d;
  border: 3px solid #111111;
  box-shadow: 5px 5px 0 #111111;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 900;
}

.hero-description {
  max-width: 34rem;
  margin: 0;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  font-weight: 700;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
}

.secondary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.2rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  color: #111111;
  box-shadow: 5px 5px 0 #111111;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.secondary-cta:hover {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 #111111;
}

.profile-shell {
  display: flex;
  justify-content: center;
  width: 100%;
}

.profile-card {
  position: relative;
  padding: 0.5rem;
  border: 4px solid #111111;
  background: #ff5c4d;
  box-shadow: 12px 12px 0 #111111;
  width: 100%;
}

.profile-badge {
  position: absolute;
  top: -1rem;
  left: -0.5rem;
  padding: 0.45rem 0.8rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 #111111;
}

.profile-picture {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 4px solid #111111;
  box-shadow: 5px 5px 0 #111111;
  background: #ebe7db;
}

.wave {
  animation: wave-animation 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60%, 100% { transform: rotate(0deg); }
}

.animate-fade-up {
  animation: fadeUp 0.55s ease-out forwards;
  animation-delay: 0.12s;
  opacity: 0;
}

.animate-fade-right {
  animation: fadeRight 0.55s ease-out forwards;
  animation-delay: 0.18s;
  opacity: 0;
}

.animate-fade-bot {
  animation: fadeBot 0.55s ease-out forwards;
  animation-delay: 0.24s;
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-up,
  .animate-fade-right,
  .animate-fade-bot,
  .wave {
    animation: none;
    opacity: 1;
  }
}

@media (min-width: 400px) {
  .profile-card {
    max-width: 26rem;
  }
}

@media (max-width: 400px) {
  .home-grid {
    display: flex;
    flex-direction: column;
    min-height: auto;
    gap: 1rem;
  }

  .home-copy {
    display: contents;
  }

  .eyebrow {
    order: 0;
    margin-bottom: 0.5rem;
  }

  .profile-shell {
    order: 1;
    margin-inline: auto;
  }

  .hero-title {
    order: 2;
    max-width: 100%;
    text-align: center;
  }

  .py-1 {
    order: 3;
    width: 100%;
  }

  .hero-description {
    order: 4;
    text-align: center;
  }

  .hero-actions {
    order: 5;
    justify-content: center;
  }

  .profile-card {
    box-shadow: 8px 8px 0 #111111;
  }
}

@media (max-width: 640px) {
  .home-grid {
    gap: 0.9rem;
    padding-top: 2.5rem;
  }

  .eyebrow {
    font-size: 0.68rem;
    padding: 0.4rem 0.7rem;
    align-self: center;
  }

  .hero-title {
    font-size: clamp(2.2rem, 12vw, 3.2rem);
    line-height: 0.96;
    margin-top: 0.5rem;
    text-align: center;
    width: 100%;
  }

  .py-1 {
    width: 100%;
    text-align: center;
  }

  .hero-description {
    max-width: 100%;
    font-size: 0.92rem;
    text-align: center;
    width: 100%;
  }

  .hero-actions {
    width: 100%;
    gap: 0.75rem;
  }

  .hero-actions > * {
    flex: 1 1 100%;
  }

  .hero-role {
    font-size: 1rem;
    line-height: 1.3;
  }

  .profile-card {
    padding: 0.5rem;
    max-width: 17rem;
    margin-inline: auto;
  }

  .profile-badge {
    left: 0.15rem;
    right: 0.15rem;
    top: -0.9rem;
    width: auto;
    padding: 0.35rem 0.55rem;
    font-size: 0.64rem;
    text-align: center;
  }

  .profile-picture {
    width: 100%;
  }
}
</style>
