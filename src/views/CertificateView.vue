<script>
export default {
  data() {
    return {
      certificates: [
        {
            id: 1,
            name: 'Belajar Dasar Pemrograman Web',
            issuer: 'Dicoding',
            issueDate: 'November 2025',
            imageUrl: 'sertifikat_course_1',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.dicoding.com/certificates/1OP842VJ1ZQK',
            topics: 'React, Front-End Web'
        },
        {
            id: 2,
            name: 'Belajar Dasar Pemrograman JavaScript',
            issuer: 'Dicoding',
            issueDate: 'November 2025',
            imageUrl: 'sertifikat_course_2',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.dicoding.com/certificates/07Z64DLN2PQR',
            topics: 'Google Cloud, React, Front-End Web, Back-End'
        },
        {
            id: 3,
            name: 'Belajar Membuat Front-End Web untuk Pemula',
            issuer: 'Dicoding',
            issueDate: 'November 2025',
            imageUrl: 'sertifikat_course_3',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.dicoding.com/certificates/2VX34E134ZYQ',
            topics: 'React, Front-End Web'
        },
        {
            id: 4,
            name: 'Belajar Dasar AI',
            issuer: 'Dicoding',
            issueDate: 'November 2025',
            imageUrl: 'sertifikat_course_4',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.dicoding.com/certificates/4EXG7240GPRL',
            topics: 'Artificial Intelligence, Machine Learning'
        },
        {
            id: 5,
            name: 'Problem Solving (Basic)',
            issuer: 'HackerRank',
            issueDate: 'July 2025',
            imageUrl: 'sertifikat_hackerrank_1',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.hackerrank.com/certificates/34f5b92b171d',
            topics: 'Data Structures, Algorithms'
        },
        {
            id: 6,
            name: 'Fundamental Front-End Web Development',
            issuer: 'Dicoding',
            issueDate: 'February 2025',
            imageUrl: 'sertifikat_course_5',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.dicoding.com/certificates/0LZ0RGW63P65',
            topics: 'API, Webpack, Front-End Web'
        },
        {
            id: 7,
            name: 'Intermediate Front-End Development',
            issuer: 'Dicoding',
            issueDate: 'March 2025',
            imageUrl: 'sertifikat_kelulusan',
            imageLoading: true,
            imageError: false,
            credentialUrl: 'https://www.dicoding.com/users/reysiregar',
            topics: 'Intermediate, Front-End'
        }
      ]
    };
  },
  // Using the same inline @load/@error approach as Projects so the skeleton
  // shows until the <img> finishes, then we toggle visibility.
}
</script>

<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left mx-3">
    <article data-page="certificates">
      <header>
        <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>My Certificates</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-300">
            Learning progress & achievements
          </h4>
        </div>
      </header>
      
      <section class="certificates-container">
        <div 
          v-for="(cert, idx) in certificates" 
          :key="cert.id" 
          class="certificate-card fadein-smooth"
          :style="{ animationDelay: (0.12 * idx) + 's' }"
        >
          <div class="card-image">
            <div v-if="cert.imageLoading" class="w-full aspect-video bg-gray-700 rounded-xl animate-pulse"></div>
            <img
              v-show="!cert.imageLoading && !cert.imageError"
              @load="cert.imageLoading = false"
              @error="cert.imageLoading = false; cert.imageError = true"
              :alt="cert.name"
              decoding="async"
              :src="'/img/certificates/' + cert.imageUrl + '.jpg'"
            >
            <div v-if="!cert.imageLoading && cert.imageError" class="image-fallback">
              <svg xmlns="http://www.w3.org/2000/svg" class="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21,15 16,10 5,21"></polyline>
              </svg>
              <span>Certificate Image</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-content">
              <h3 class="card-title" :title="cert.name">{{ cert.name }}</h3>
              <div class="cert-meta">
                <span class="issuer">{{ cert.issuer }}</span>
                <span class="date">{{ cert.issueDate }}</span>
              </div>
              <div class="topics" :title="cert.topics">{{ cert.topics }}</div>
            </div>
            <a 
              :href="cert.credentialUrl" 
              target="_blank" 
              rel="noreferrer"
              class="view-credential-btn"
              :aria-label="`View ${cert.name} credential`"
            >
              <span>View Credential</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.certificates-container {
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding-bottom: 32px;
}

.certificate-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  height: 380px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.certificate-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 50%, 
    rgba(255, 255, 255, 0.02) 100%);
  border-radius: 16px;
  pointer-events: none;
}

.certificate-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(96, 165, 250, 0.3);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(96, 165, 250, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  background: rgba(96, 165, 250, 0.08);
}

/* Focus states for accessibility */
.certificate-card:focus-within {
  outline: 2px solid rgba(96, 165, 250, 0.5);
  outline-offset: 2px;
}

.card-image {
  width: 100%;
  height: 160px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.card-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, 
    transparent 0%, 
    rgba(255, 255, 255, 0.1) 50%, 
    transparent 100%);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  filter: brightness(0.95) contrast(1.05);
  padding: 8px;
}

.certificate-card:hover .card-image img {
  transform: scale(1.1);
  filter: brightness(1) contrast(1.2);
}

/* Image fallback styling */
.image-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  gap: 8px;
}

.fallback-icon {
  width: 32px;
  height: 32px;
  stroke: rgba(255, 255, 255, 0.4);
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  position: relative;
  z-index: 2;
  min-height: 0;
}

.card-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 0;
  overflow: hidden;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 2.6em; /* 2 lines */
}

.cert-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.issuer {
  font-weight: 500;
  color: rgba(96, 165, 250, 0.8);
}

.date::before {
  content: '•';
  margin-right: 8px;
  color: rgba(255, 255, 255, 0.3);
}

.topics {
  font-size: 0.85rem;
  color: rgba(125, 211, 252, 0.9);
  font-weight: 500;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  flex: 1;
  max-height: 2.6em; /* 2 lines */
}

.view-credential-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(96, 165, 250, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 16px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.view-credential-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.view-credential-btn:hover::before {
  left: 100%;
}

.view-credential-btn:hover,
.view-credential-btn:focus {
  background: rgba(96, 165, 250, 0.15);
  border-color: rgba(96, 165, 250, 0.3);
  color: rgba(147, 197, 253, 1);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(96, 165, 250, 0.2);
  outline: none;
}

.view-credential-btn .icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.320, 1);
}

.view-credential-btn:hover .icon,
.view-credential-btn:focus .icon {
  transform: translateX(2px);
}

/* Staggered smooth fade-in animation */
@keyframes fadeinSmooth {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fadein-smooth {
  opacity: 0;
  animation: fadeinSmooth 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .certificate-card,
  .card-image img,
  .view-credential-btn,
  .view-credential-btn .icon,
  .view-credential-btn::before {
    transition: none;
    animation: none;
  }
  
  /* Ensure elements are visible even without animations */
  .fadein-smooth {
    opacity: 1 !important;
    transform: none !important;
  }
  
  .certificate-card:hover {
    transform: none;
  }
  
  .certificate-card:hover .card-image img {
    transform: none;
  }
  
  .view-credential-btn:hover,
  .view-credential-btn:focus {
    transform: none;
  }
  
  .view-credential-btn:hover .icon,
  .view-credential-btn:focus .icon {
    transform: none;
  }
  
  .view-credential-btn::before {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .certificates-container {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 8px;
  }
  
  .certificate-card {
    height: 340px;
  }
  
  .card-image {
    height: 140px;
  }
  
  .card-body {
    padding: 14px 16px;
  }
  
  .card-title {
    font-size: 0.9rem;
    line-clamp: 2;
    -webkit-line-clamp: 2;
  }
  
  .cert-meta {
    font-size: 0.7rem;
  }
  
  .topics {
    font-size: 0.7rem;
  }
  
  .view-credential-btn {
    font-size: 0.75rem;
    padding: 10px 12px;
  }
  
  .view-credential-btn .icon {
    width: 14px;
    height: 14px;
  }
}

@media screen and (max-width: 480px) {
  .certificate-card {
    height: auto;
    min-height: 240px;
  }
  
  .card-image {
    height: 100px;
  }
  
  .card-body {
    padding: 12px 16px 16px;
  }
}
</style>