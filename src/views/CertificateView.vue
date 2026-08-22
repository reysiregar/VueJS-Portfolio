<template>
  <main class="certificate-page">
    <section class="certificate-hero" :class="showContent ? 'animate-in' : 'is-hidden'">
      <div class="hero-copy">
        <span class="eyebrow">Credentials & Certifications</span>
        <h1>Continuous learning, verified milestones, and technical credentials.</h1>
        <p>
          A structured record of completed developer specializations, algorithmic problem solving, and professional training certifications.
        </p>
      </div>

      <div class="hero-metrics">
        <div class="metric-card">
          <span class="metric-value">8</span>
          <span class="metric-label">Certificates</span>
        </div>
        <div class="metric-card metric-card-accent">
          <span class="metric-value">2</span>
          <span class="metric-label">Specializations</span>
        </div>
        <div class="metric-card">
          <span class="metric-value">Live</span>
          <span class="metric-label">Verified credentials</span>
        </div>
      </div>
    </section>

    <section class="certificate-grid-wrap" :class="showContent ? 'animate-in delay-1' : 'is-hidden'">
      <div class="certificate-grid">
        <article v-for="(cert, idx) in certificates" :key="cert.id" class="certificate-card" :style="{ animationDelay: `${idx * 0.08}s` }">
          <div class="card-image">
            <div v-if="cert.imageLoading" class="skeleton-overlay" aria-hidden="true"></div>
            <img
              :class="{ 'image-loaded': !cert.imageLoading }"
              @load="cert.imageLoading = false"
              @error="cert.imageLoading = false; cert.imageError = true"
              :alt="cert.name"
              decoding="async"
              loading="lazy"
              :src="`/img/certificates/${cert.imageUrl}.webp`"
            >
            <div v-if="cert.imageError" class="image-fallback">
              <svg xmlns="http://www.w3.org/2000/svg" class="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21,15 16,10 5,21"></polyline>
              </svg>
              <span>Certificate image unavailable</span>
            </div>
          </div>

          <div class="card-body">
            <div class="card-content">
              <div class="card-head">
                <h2 class="card-title" :title="cert.name">{{ cert.name }}</h2>
                <div class="cert-meta">
                  <span class="issuer">{{ cert.issuer }}</span>
                  <span class="date">{{ cert.issueDate }}</span>
                </div>
              </div>

              <p class="topics" :title="cert.topics">{{ cert.topics }}</p>
            </div>

            <button
              v-if="needsPreviewModal(cert)"
              type="button"
              class="view-credential-btn"
              :aria-label="`Preview ${cert.name} details`"
              @click="openCertificatePreview(cert)"
            >
              <span>Preview</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8.75 8.5a1.25 1.25 0 112.5 0v1.25h.25a.75.75 0 010 1.5h-.25v.25a1.25 1.25 0 11-2.5 0v-.25H8.5a.75.75 0 010-1.5h.25V8.5z" clip-rule="evenodd" />
              </svg>
            </button>
            <a
              v-else
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
        </article>
      </div>
    </section>

    <div
      v-if="activePreview"
      class="certificate-modal-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="`${activePreview.name} preview`"
      @click.self="closeCertificatePreview"
    >
      <div class="certificate-modal-card" :class="{ 'portrait-layout': previewImageIsPortrait }">
        <button type="button" class="modal-close-btn" aria-label="Close certificate preview" @click="closeCertificatePreview">×</button>

        <div class="modal-image-frame">
          <div class="modal-image-wrap" ref="previewImageWrap" @scroll.passive="handleImageWrapScroll">
            <img
              :src="`/img/certificates/${activePreview.imageUrl}.webp`"
              :alt="activePreview.name"
              class="modal-image"
              :class="{ 'portrait-preview': previewImageIsPortrait }"
              @load="handlePreviewImageLoad"
            >
          </div>
          <div v-if="showScrollGuide" class="scroll-guide" aria-hidden="true">
            <span>Scroll to view full certificate</span>
            <span class="scroll-guide-arrow">↓</span>
          </div>
        </div>

        <div class="modal-content">
          <h3 class="modal-title">{{ activePreview.name }}</h3>
          <p class="modal-meta">
            <strong>{{ activePreview.issuer }}</strong>
            <span>{{ activePreview.issueDate }}</span>
          </p>
          <p class="modal-topics">{{ activePreview.topics }}</p>
          <p class="modal-description">{{ activePreview.previewInfo }}</p>
        </div>
      </div>
    </div>
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
      previewOnlyImages: ['sertifikat_kelulusan', 'sertifikat_pelatihan_1'],
      activePreview: null,
      previewImageIsPortrait: false,
      showScrollGuide: false,
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
          topics: 'React, Front-End Web',
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
          topics: 'Google Cloud, React, Front-End Web, Back-End',
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
          topics: 'React, Front-End Web',
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
          topics: 'Artificial Intelligence, Machine Learning',
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
          topics: 'Data Structures, Algorithms',
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
          topics: 'API, Webpack, Front-End Web',
        },
        {
          id: 7,
          name: 'Intermediate Front-End Development',
          issuer: 'Dicoding',
          issueDate: 'March 2025',
          imageUrl: 'sertifikat_kelulusan',
          imageLoading: true,
          imageError: false,
          credentialUrl: '',
          topics: 'Intermediate, Front-End',
          previewInfo: 'Certificate of completion for the Intermediate Front-End Development learning path.',
        },
        {
          id: 8,
          name: 'Certificate of Training',
          issuer: 'Gunadarma University',
          issueDate: 'June 2025',
          imageUrl: 'sertifikat_pelatihan_1',
          imageLoading: true,
          imageError: false,
          credentialUrl: '',
          topics: 'JavaScript Programming Languages Fundamental',
          previewInfo: 'Training certification ID 825739 for JavaScript Programming Languages Fundamental.',
        },
      ],
    };
  },
  methods: {
    needsPreviewModal(certificate) {
      return this.previewOnlyImages.includes(certificate.imageUrl);
    },
    openCertificatePreview(certificate) {
      this.activePreview = certificate;
      this.previewImageIsPortrait = false;
      this.showScrollGuide = false;
      document.body.style.overflow = 'hidden';
    },
    closeCertificatePreview() {
      this.activePreview = null;
      this.previewImageIsPortrait = false;
      this.showScrollGuide = false;
      document.body.style.overflow = '';
    },
    handlePreviewImageLoad(event) {
      const image = event.target;
      this.previewImageIsPortrait = image.naturalHeight > image.naturalWidth;
      this.$nextTick(() => {
        this.updateScrollGuide();
      });
    },
    handleImageWrapScroll() {
      this.updateScrollGuide();
    },
    updateScrollGuide() {
      const imageWrap = this.$refs.previewImageWrap;

      if (!this.previewImageIsPortrait || !imageWrap) {
        this.showScrollGuide = false;
        return;
      }

      const hasOverflow = imageWrap.scrollHeight > imageWrap.clientHeight + 4;
      const isNearBottom = imageWrap.scrollTop + imageWrap.clientHeight >= imageWrap.scrollHeight - 8;
      this.showScrollGuide = hasOverflow && !isNearBottom;
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && this.activePreview) {
        this.closeCertificatePreview();
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    setTimeout(() => {
      this.certificates.forEach((cert) => {
        cert.imageLoading = true;
      });
    }, 0);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
.certificate-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.certificate-hero,
.certificate-grid-wrap {
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 8px 8px 0 #111111;
}

.certificate-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffd84d 0%, #f7f3e8 45%, #53d9a7 100%);
}

.hero-copy,
.hero-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.hero-copy h1 {
  margin: 0;
  max-width: 22ch;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
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

.hero-metrics {
  justify-content: flex-end;
}

.metric-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.85rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
}

.metric-card-accent {
  background: #ffd84d;
}

.metric-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 900;
}

.metric-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.certificate-grid-wrap {
  padding: 1rem;
}

.certificate-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.certificate-card {
  display: flex;
  flex-direction: column;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 5px 5px 0 #111111;
  overflow: hidden;
}

.card-image {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #ebe7db;
  border-bottom: 3px solid #111111;
  overflow: hidden;
}

.card-image img,
.skeleton-overlay,
.image-fallback {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.card-image img {
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 220ms ease;
}

.card-image img.image-loaded {
  opacity: 1;
}

.skeleton-overlay {
  background: linear-gradient(110deg, rgba(17, 17, 17, 0.08) 8%, rgba(17, 17, 17, 0.16) 18%, rgba(17, 17, 17, 0.08) 33%), #ebe7db;
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
}

.image-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(17, 17, 17, 0.08);
  color: #111111;
  font-size: 0.8rem;
  font-weight: 700;
}

.fallback-icon {
  width: 30px;
  height: 30px;
  stroke: #111111;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.85rem;
  flex: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.card-title {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.06rem;
  font-weight: 900;
  line-height: 1.2;
}

.cert-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.issuer {
  color: #2f6bff;
}

.date::before {
  content: '•';
  margin-right: 0.5rem;
}

.topics {
  margin: 0;
  padding: 0.55rem 0.65rem;
  border: 3px solid #111111;
  background: #ffd84d;
  box-shadow: 4px 4px 0 #111111;
  font-size: 0.78rem;
  font-weight: 800;
}

.view-credential-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  width: 100%;
  padding: 0.85rem 0.95rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 4px 4px 0 #111111;
  color: #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.view-credential-btn .icon {
  width: 1rem;
  height: 1rem;
}

.certificate-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(17, 17, 17, 0.55);
}

.certificate-modal-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(16rem, 0.8fr);
  gap: 1rem;
  width: min(100%, 70rem);
  max-height: 90vh;
  padding: 1rem;
  border: 4px solid #111111;
  background: #f7f3e8;
  box-shadow: 10px 10px 0 #111111;
  overflow: hidden;
}

.certificate-modal-card.portrait-layout {
  grid-template-columns: minmax(0, 1fr) minmax(14rem, 0.65fr);
}

.modal-close-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 3;
  width: 2.6rem;
  height: 2.6rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 4px 4px 0 #111111;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1;
}

.modal-image-frame {
  position: relative;
  min-height: 0;
}

.modal-image-wrap {
  max-height: calc(90vh - 2rem);
  overflow: auto;
  border: 3px solid #111111;
  background: #ebe7db;
}

.modal-image {
  display: block;
  width: 100%;
  height: auto;
}

.portrait-preview {
  width: 100%;
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding-right: 2.5rem;
}

.modal-title {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  line-height: 1.05;
  font-weight: 900;
}

.modal-meta,
.modal-topics,
.modal-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
}

.modal-topics {
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.65rem;
  border: 3px solid #111111;
  background: #ffd84d;
  box-shadow: 4px 4px 0 #111111;
  font-weight: 800;
}

.modal-description {
  max-width: 32rem;
}

.scroll-guide {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.65rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 4px 4px 0 #111111;
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
}

.scroll-guide-arrow {
  font-size: 1rem;
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
  .certificate-hero,
  .certificate-grid,
  .certificate-modal-card {
    grid-template-columns: 1fr;
  }

  .certificate-modal-card {
    max-height: 92vh;
  }

  .certificate-modal-card.portrait-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .certificate-hero,
  .certificate-grid-wrap,
  .certificate-modal-overlay {
    padding: 0.85rem;
  }

  .certificate-hero {
    gap: 0.85rem;
  }

  .hero-copy h1 {
    max-width: 100%;
    font-size: clamp(1.4rem, 6.5vw, 1.85rem);
    line-height: 1.12;
  }

  .hero-copy p {
    font-size: 0.93rem;
  }

  .hero-metrics {
    gap: 0.5rem;
  }

  .metric-card {
    padding: 0.65rem 0.75rem;
  }

  .certificate-card,
  .certificate-hero,
  .certificate-grid-wrap {
    box-shadow: 6px 6px 0 #111111;
  }

  .certificate-grid {
    gap: 0.7rem;
  }

  .card-body,
  .certificate-modal-card {
    padding: 0.85rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .topics,
  .view-credential-btn {
    font-size: 0.72rem;
  }

  .certificate-modal-card {
    gap: 0.85rem;
    max-height: calc(100dvh - 1.7rem);
    overflow-y: auto;
    padding-top: 4.25rem;
    border-width: 3px;
    box-shadow: 6px 6px 0 #111111;
    -webkit-overflow-scrolling: touch;
  }

  .modal-close-btn {
    position: fixed;
    top: max(0.85rem, env(safe-area-inset-top));
    right: max(0.85rem, env(safe-area-inset-right));
    width: 3rem;
    height: 3rem;
    font-size: 1.65rem;
  }

  .modal-image-wrap {
    max-height: min(58dvh, 30rem);
  }

  .certificate-modal-card.portrait-layout .modal-image-wrap {
    max-height: min(62dvh, 32rem);
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-content {
    padding-right: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in,
  .skeleton-overlay,
  .image-loaded {
    animation: none;
  }

  .certificate-modal-card,
  .card-image img {
    transition: none;
  }
}
</style>
