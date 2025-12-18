import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
      title: 'Reynaldi Wiratama Siregar | Front-End Web Developer Portfolio',
      description: 'Reynaldi Wiratama Siregar (Reynaldi Siregar) - Passionate Front-End Web Developer from Bekasi, Indonesia. Explore my portfolio, skills, projects, and certificates.',
      keywords: 'Reynaldi Wiratama Siregar, Reynaldi Siregar, Front-End Developer, Web Developer, VueJS Developer, JavaScript Developer, Bekasi Indonesia'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { 
      title: 'About Reynaldi Siregar | Skills & Experience',
      description: 'Learn more about Reynaldi Wiratama Siregar - Front-End Web Developer with expertise in VueJS, JavaScript, HTML, CSS, and Tailwind. Information System student passionate about web development.',
      keywords: 'Reynaldi Siregar about, web developer skills, VueJS, JavaScript, Tailwind, front-end developer'
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { 
      title: 'Portfolio Projects | Reynaldi Siregar Web Developer',
      description: 'Explore web development projects by Reynaldi Wiratama Siregar. View my portfolio of VueJS, JavaScript, and front-end development work.',
      keywords: 'Reynaldi Siregar portfolio, web development projects, VueJS projects, JavaScript portfolio'
    }
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: () => import('../views/CertificateView.vue'),
    meta: { 
      title: 'Certificates & Achievements | Reynaldi Siregar',
      description: 'Professional certificates and achievements of Reynaldi Wiratama Siregar in web development, programming, and IT skills.',
      keywords: 'Reynaldi Siregar certificates, web development certificates, programming achievements'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: { 
      title: 'Blog | Reynaldi Siregar - Web Development Insights',
      description: 'Read articles and insights about web development, programming tips, and technology by Reynaldi Wiratama Siregar.',
      keywords: 'Reynaldi Siregar blog, web development blog, programming articles'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { 
      title: 'Contact Reynaldi Siregar | Get In Touch',
      description: 'Contact Reynaldi Wiratama Siregar for web development projects, collaborations, or inquiries. Front-End Developer based in Bekasi, Indonesia.',
      keywords: 'contact Reynaldi Siregar, hire web developer, Reynaldi Wiratama Siregar contact'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Update meta tags dynamically for SEO
router.beforeEach((to, from, next) => {
  // Update title
  document.title = to.meta.title || 'Reynaldi Wiratama Siregar | Portfolio';
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', to.meta.description || '');
  
  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', to.meta.keywords || '');
  
  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', to.meta.title || '');
  
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', to.meta.description || '');
  
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', 'https://www.reynaldisiregar.me' + to.path);
  
  // Update Twitter Card tags
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', to.meta.title || '');
  
  let twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute('content', to.meta.description || '');
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', 'https://www.reynaldisiregar.me' + to.path);
  
  next();
});

export default router
