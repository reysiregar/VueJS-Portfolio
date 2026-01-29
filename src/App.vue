<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <AppPreloader v-if="isLoading" />
    <!-- Speed Insights Component -->
    <SpeedInsights />
    
    <nav class="max-w-7xl px-5 fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex" aria-label="Go to Home">
          <span class="self-center text-lg text-blue-300 font-semibold whitespace-nowrap fadein-bot">Rey's Portfolio</span>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/" class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0" aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio" class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Project</router-link>
            </li>
            <li>
              <router-link to="/certificate" class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Certificate</router-link>
            </li>
            <li>
              <router-link to="/blog" class="fadein-bot fadein-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/contact" class="fadein-bot fadein-5 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Mobile Menu Button and GitHub Link -->
        <div class="flex items-center gap-4 md:order-2 fadein-bot">
          <a href="https://github.com/reysiregar" class="hidden md:block"><img class="w-9 rounded-full" src="../public/img/github_logo.png" alt="GitHub profile of Reynaldi Siregar"></a>
          
          <!-- Hamburger Menu Button (Mobile Only) -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
            :class="{ 'menu-open': isMobileMenuOpen }"
            aria-label="Open mobile menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
      :class="{ 'opacity-100 pointer-events-auto': isMobileMenuOpen, 'opacity-0 pointer-events-none': !isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Menu Content -->
    <div 
      class="fixed top-0 right-0 h-full w-64 bg-[#121212] bg-opacity-95 backdrop-blur-md z-50 md:hidden transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }"
    >
      <div class="flex flex-col h-full">
        <!-- Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-[#383838]">
          <button @click="closeMobileMenu" class="text-gray-400 hover:text-white" aria-label="Close mobile menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 p-6">
          <ul class="space-y-4">
            <li>
              <router-link 
                to="/" 
                @click="closeMobileMenu"
                class="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#383838] transition-all duration-200"
                :class="{ 'text-blue-300 bg-[#383838]': $route.path === '/' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/about" 
                @click="closeMobileMenu"
                class="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#383838] transition-all duration-200"
                :class="{ 'text-blue-300 bg-[#383838]': $route.path === '/about' }"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link 
                to="/portfolio" 
                @click="closeMobileMenu"
                class="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#383838] transition-all duration-200"
                :class="{ 'text-blue-300 bg-[#383838]': $route.path === '/portfolio' }"
              >
                Project
              </router-link>
            </li>
            <li>
              <router-link 
                to="/certificate" 
                @click="closeMobileMenu"
                class="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#383838] transition-all duration-200"
                :class="{ 'text-blue-300 bg-[#383838]': $route.path === '/certificate' }"
              >
                Certificate
              </router-link>
            </li>
            <li>
              <router-link 
                to="/blog" 
                @click="closeMobileMenu"
                class="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#383838] transition-all duration-200"
                :class="{ 'text-blue-300 bg-[#383838]': $route.path === '/blog' }"
              >
                Blog
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contact" 
                @click="closeMobileMenu"
                class="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#383838] transition-all duration-200"
                :class="{ 'text-blue-300 bg-[#383838]': $route.path === '/contact' }"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Menu Footer -->
        <div class="p-6 border-t border-[#383838]">
          <a href="https://github.com/reysiregar" class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
            <img class="w-6 h-6 rounded-full" src="../public/img/github_logo.png" alt="GitHub profile of Reynaldi Siregar">
            <span class="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-[100px]">
      <router-view :showContent="!isLoading" />
    </div>
  </div>
</template>

<script>
import { SpeedInsights } from "@vercel/speed-insights/vue";
import AppPreloader from './components/AppPreloader.vue';

let scrollTimeout;

export default {
  components: {
    SpeedInsights,
    AppPreloader,
  },
  data() {
    return {
      isLoading: true,
      isMobileMenuOpen: false,
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push('/');
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    handleScroll() {
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 700);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.style.overflow = '';
  },
  watch: {
    $route() {
      this.closeMobileMenu();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
:root {
  --animation-duration: 0.5s;
  --animation-delay: 500ms;
  --profile-shadow-color: rgba(173, 216, 230, 0.5);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  opacity: 0;
  background: transparent;
}

body.scrolling ::-webkit-scrollbar {
  opacity: 1;
  background: initial;
}

body.scrolling ::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

body.scrolling ::-webkit-scrollbar-thumb {
  background: #add8e6;
  border-radius: 5px;
}

body.scrolling ::-webkit-scrollbar-button {
  width: 20px;
}

html {
  scrollbar-width: none;
}
body.scrolling {
  scrollbar-width: thin;
  scrollbar-color: #add8e6 hsl(240, 1%, 17%);
}

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100vh; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #add8e6;
}

nav a.router-link-exact-active:hover {
  color: white;
}

/* Hamburger Menu Styles */
.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: #93c5fd;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.hamburger-line:nth-child(1) {
  margin-bottom: 4px;
}

.hamburger-line:nth-child(2) {
  margin-bottom: 4px;
}

/* Hamburger to X Animation */
.menu-open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-open .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.menu-open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Fade-in animations for various elements */
@keyframes fadeinBot {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeinUp {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeinLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation classes */
.fadein-bot {
  opacity: 0;
  animation: fadeinBot 0.8s ease-out forwards;
}

.fadein-up {
  opacity: 0;
  animation: fadeinUp 0.8s ease-out forwards;
}

.fadein-left {
  opacity: 0;
  animation: fadeinLeft 0.8s ease-out forwards;
}

/* Staggered animation delays */
.fadein-1 {
  animation-delay: 0.1s;
}

.fadein-2 {
  animation-delay: 0.2s;
}

.fadein-3 {
  animation-delay: 0.3s;
}

.fadein-4 {
  animation-delay: 0.4s;
}

.fadein-5 {
  animation-delay: 0.5s;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .fadein-bot,
  .fadein-up,
  .fadein-left,
  .fadein-1,
  .fadein-2,
  .fadein-3,
  .fadein-4,
  .fadein-5 {
    animation: none;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>