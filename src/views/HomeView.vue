<template>
  <main class="mt-6 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    <section class="space-y-2 text-center md:text-left px-10" itemscope itemtype="https://schema.org/Person">
      <p :class="['text-blue-200 md:text-base lg:text-lg', showContent ? 'animate-fade-up' : 'opacity-0']">Hello World, I'm</p>
      <h1 :class="['text-4xl font-bold md:text-5xl lg:text-6xl text-white', showContent ? 'animate-fade-up' : 'opacity-0']" itemprop="name">Reynaldi Siregar</h1>
      <div class="py-2">
        <TypeWriter 
          :phrases="roles"
          :period="2000"
          :class="['text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-500 md:text-2xl lg:text-3xl', showContent ? 'animate-fade-up' : 'opacity-0']"
        />
        <meta itemprop="jobTitle" content="Front-End Web Developer">
      </div>
      <p :class="['text-white pr-4 md:text-base lg:text-lg', showContent ? 'animate-fade-up' : 'opacity-0']" itemprop="description">
        Welcome to My portfolio website. 
        <span class="wave" role="img" aria-label="Waving hand emoji">👋🏼</span>
      </p>
      <br>
      <ResumeButton 
        :resume-path="resumePath"
        :class="showContent ? 'animate-fade-bot' : 'opacity-0'"
      />
    </section>
    <div :class="['flex justify-center md:justify-start', showContent ? 'animate-fade-right' : 'opacity-0']">
      <img 
        alt="Reynaldi Wiratama Siregar - Front-End Web Developer from Bekasi, Indonesia" 
        fetchpriority="high" 
        width="300" 
        height="300" 
        decoding="async" 
        class="w-9/12 md:w-[320px] lg:w-[350px] md:h-auto rounded-full profile-picture" 
        src="/img/profile.jpg"
        itemprop="image"
      >
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
:root {
  --animation-duration: 0.5s;
  --animation-delay: 500ms;
  --profile-shadow-color: rgba(173, 216, 230, 0.5);
  --profile-glow-color: rgba(173, 216, 230, 0.8);
}
.profile-picture {
  box-shadow: 
    0 0 clamp(20px, 5vw, 40px) -5px var(--profile-shadow-color),
    0 0 clamp(30px, 7vw, 60px) -10px rgba(173, 216, 230, 0.3),
    0 0 clamp(40px, 9vw, 80px) -15px rgba(173, 216, 230, 0.2);
  transition: all 0.3s ease;
}

.profile-picture:hover {
  box-shadow: 
    0 0 clamp(25px, 6vw, 50px) -5px var(--profile-glow-color),
    0 0 clamp(40px, 8vw, 70px) -10px rgba(173, 216, 230, 0.4),
    0 0 clamp(50px, 10vw, 90px) -15px rgba(173, 216, 230, 0.3),
    0 0 clamp(60px, 12vw, 100px) -20px rgba(173, 216, 230, 0.2);
  transform: scale(1.02);
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
  animation: fadeUp var(--animation-duration) forwards;
  animation-delay: var(--animation-delay);
  opacity: 0;
}

.animate-fade-right {
  animation: fadeRight var(--animation-duration) forwards;
  animation-delay: var(--animation-delay);
  opacity: 0;
}

.animate-fade-bot {
  animation: fadeBot var(--animation-duration) forwards;
  animation-delay: var(--animation-delay);
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
</style>