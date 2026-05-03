<template>
  <div class="shell-bg min-h-screen text-ink">
    <AppPreloader v-if="isLoading" />
    <SpeedInsights />
    <div class="hero-orb hero-orb-left"></div>
    <div class="hero-orb hero-orb-right"></div>

    <nav class="nav-shell">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button @click="redirectToHome" class="brand-chip" aria-label="Go to Home">
          <span class="brand-mark">RS</span>
          <span class="brand-copy">
            <span class="brand-name">Rey's Portfolio</span>
          </span>
        </button>

        <div class="hidden md:flex items-center gap-2 lg:gap-3" id="desktop-nav">
          <router-link v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">{{ item.label }}</router-link>
        </div>

        <div class="flex items-center gap-3">
          <a href="https://github.com/reysiregar" class="hidden md:inline-flex nav-link nav-link-ghost" target="_blank" rel="noreferrer">GitHub</a>
          <button
            @click="toggleMobileMenu"
            class="menu-button md:hidden"
            :class="{ open: isMobileMenuOpen }"
            aria-label="Open mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <div 
      class="mobile-overlay md:hidden transition-opacity duration-300"
      :class="{ 'opacity-100 pointer-events-auto': isMobileMenuOpen, 'opacity-0 pointer-events-none': !isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <div 
      class="mobile-drawer md:hidden transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }"
    >
      <div class="flex h-full flex-col">
        <div class="flex items-center justify-between border-b-3 border-ink px-5 py-5">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.35em]">Menu</p>
            <p class="text-lg font-display font-black">Navigation</p>
          </div>
          <button @click="closeMobileMenu" class="drawer-close" aria-label="Close mobile menu">×</button>
        </div>

        <nav class="flex-1 px-5 py-6">
          <div class="space-y-4">
            <router-link
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              @click="closeMobileMenu"
              class="drawer-link"
            >
              <span>{{ item.label }}</span>
              <span>→</span>
            </router-link>
          </div>
        </nav>

        <div class="border-t-3 border-ink px-5 py-5">
          <a href="https://github.com/reysiregar" class="inline-flex items-center gap-3 font-bold drawer-github-link" target="_blank" rel="noreferrer">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v-3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <main class="mx-auto w-full max-w-7xl px-3 pb-8 pt-24 sm:px-6 lg:px-8 lg:pt-32">
      <router-view :showContent="!isLoading" />
    </main>
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
      navItems: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Work', to: '/portfolio' },
        { label: 'Certificates', to: '/certificate' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
      ],
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
  --paper: #f7f3e8;
  --ink: #111111;
  --accent: #2f6bff;
  --accent-2: #ff5c4d;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scrollbar-width: none;
}

body.scrolling {
  scrollbar-width: thin;
  scrollbar-color: var(--accent) var(--ink);
}

body {
  font-family: 'Poppins', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 216, 77, 0.35), transparent 32%),
    radial-gradient(circle at top right, rgba(47, 107, 255, 0.18), transparent 28%),
    var(--paper);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: var(--ink);
  min-height: 100vh;
}

::selection {
  background: var(--ink);
  color: var(--paper);
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--ink);
  border: 2px solid var(--paper);
  border-radius: 999px;
}

.shell-bg {
  position: relative;
  overflow: hidden;
}

.shell-bg::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(17, 17, 17, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.18), transparent 65%);
}

.hero-orb {
  position: fixed;
  pointer-events: none;
  border: 3px solid var(--ink);
  border-radius: 999px;
  box-shadow: 8px 8px 0 var(--ink);
  opacity: 0.18;
}

.hero-orb-left {
  width: 180px;
  height: 180px;
  left: -40px;
  top: 140px;
  background: var(--citrus);
}

.hero-orb-right {
  width: 220px;
  height: 220px;
  right: -60px;
  top: 220px;
  background: var(--accent);
}

.nav-shell {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  border-bottom: 3px solid var(--ink);
  background: rgba(247, 243, 232, 0.92);
  backdrop-filter: blur(12px);
}

.brand-chip,
.nav-link,
.nav-link-ghost,
.menu-button,
.drawer-link,
.drawer-close {
  border: 3px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

.brand-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--citrus);
  color: var(--ink);
  font-family: 'Space Grotesk', sans-serif;
  text-align: left;
}

.brand-chip:hover,
.nav-link:hover,
.nav-link-ghost:hover,
.menu-button:hover,
.drawer-link:hover,
.drawer-close:hover {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 var(--ink);
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 3px solid var(--ink);
  background: var(--accent);
  color: var(--paper);
  font-weight: 900;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name {
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.nav-link,
.nav-link-ghost,
.drawer-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink);
  background: var(--paper);
}

.router-link-exact-active,
.router-link-active {
  background: var(--accent);
  color: var(--paper);
}

.nav-link-ghost {
  background: var(--accent-2);
}

.menu-button,
.drawer-close {
  display: grid;
  place-items: center;
  width: 3.2rem;
  height: 3.2rem;
  background: var(--paper);
}

.menu-button span {
  display: block;
  width: 1.5rem;
  height: 0.28rem;
  background: var(--ink);
  transition: all 160ms ease;
}

.menu-button span + span {
  margin-top: 0.01rem;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 110;
  background: rgba(17, 17, 17, 0.4);
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 120;
  width: min(20rem, 88vw);
  height: 100%;
  background: var(--paper);
  border-left: 3px solid var(--ink);
  box-shadow: -8px 0 0 var(--ink);
}

@media (max-width: 640px) {
  .nav-shell {
    border-bottom-width: 2px;
  }

  .nav-shell > div {
    gap: 0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .brand-chip {
    gap: 0.55rem;
    padding: 0.65rem 0.7rem;
  }

  .brand-mark {
    width: 2rem;
    height: 2rem;
  }

  .brand-name {
    font-size: 0.9rem;
  }

  .menu-button {
    width: 2.85rem;
    height: 2.85rem;
  }

  .menu-button,
  .drawer-close {
    box-shadow: 2px 2px 0 var(--ink);
  }

  .mobile-drawer {
    width: 100vw;
    box-shadow: none;
    border-left-width: 0;
    border-radius: 0;
  }

  .mobile-drawer > div {
    background: var(--paper);
  }

  .mobile-drawer nav {
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }

  .mobile-drawer .drawer-link {
    padding: 0.95rem 1rem;
    box-shadow: 3px 3px 0 var(--ink);
  }

  .mobile-drawer .drawer-link.router-link-exact-active,
  .mobile-drawer .drawer-link.router-link-active {
    background: var(--accent);
    color: var(--paper);
  }

  .mobile-drawer .drawer-close {
    width: 2.4rem;
    height: 2.4rem;
  }

  .mobile-drawer .border-t-3 {
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }

  .drawer-link {
    padding: 0.9rem 1rem;
  }

  .drawer-close {
    width: 2.6rem;
    height: 2.6rem;
  }
}

.drawer-close {
  width: 3rem;
  height: 3rem;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1;
  background: var(--accent-2);
  display: grid;
  place-items: center;
  color: var(--paper);
}

.drawer-link {
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.1rem;
  background: var(--paper);
  flex-direction: row;
  gap: 0.5rem;
}

.drawer-link.router-link-exact-active,
.drawer-link.router-link-active {
  background: var(--accent);
  color: var(--paper);
}

.drawer-github-link {
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.drawer-github-link:hover {
  transform: translate(2px, 2px);
}

.fadein-bot,
.fadein-up,
.fadein-left,
.fadein-1,
.fadein-2,
.fadein-3,
.fadein-4,
.fadein-5 {
  animation-duration: 0.55s;
}

@media (prefers-reduced-motion: reduce) {
  .brand-chip,
  .nav-link,
  .nav-link-ghost,
  .menu-button,
  .drawer-link,
  .drawer-close,
  .menu-button span {
    transition: none;
  }

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